
import CanvasDraw from "react-canvas-draw"
import React, {useRef, useState, useEffect, MutableRefObject} from "react"
import Button from "./components/Button"
import MIDIPlayer from "./components/MIDIPlayer"

const App = () => {
  const canvasRef: undefined | MutableRefObject<any> = useRef(undefined)
  const [title, setTitle] = useState("")
  const [midiFile, setMidiFile] = useState<ArrayBuffer>()


  useEffect(
    () => {


      const fetchData = async () => {
      const midi = await fetch("/generate")
      const buffer = await midi.arrayBuffer()
      setMidiFile(buffer)

      MIDIPlayer(buffer)
      }
      fetchData()


    }, []


  )
  

  

  const handleClick =  async () => {
    await fetch("/save", {
      method: "POST",
      body: JSON.stringify({"title":title})
    })

    const responseMelody = await fetch(`/put-presigned-url?bucket=melodies&object=${title}`)
    const presignedMelodyPutUrl = await responseMelody.json()
    const responseDrawing = await fetch(`/put-presigned-url?bucket=images&object=${title}`)
    const presignedDrawingPutUrl = await responseDrawing.json()
    await fetch(presignedDrawingPutUrl, {
      method: "PUT",
      body: JSON.stringify(canvasRef.current.getSaveData())
    })
    await fetch(presignedMelodyPutUrl, {
      method: "PUT",
      body: midiFile
    })


   
}

const handleUndo = () => {

  canvasRef.current.undo()
 
}
const handleClear = () => {

  canvasRef.current.clear()
}
 
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTitle(e.target.value)
}
  
  return (
    <div className="flex flex-col items-center">
    
    <input type="text" onChange={handleChange} className="mb-4 mt-4 border border-black rounded-md"/>
     <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={window.screen.availWidth/2} canvasHeight={window.screen.availHeight/2} className="border border-black rounded-md mb-4"/>
     <div className="flex justify-evenly w-1/4">
     
     <Button handleClick={handleUndo} name={'Undo'}/>
     <Button handleClick={handleClear} name={'Clear'}/>
     <Button handleClick={handleClick} name={'Save drawing'}/>
     </div>
     </div>
      
  );
}


export default App;
