
import './App.css';
import CanvasDraw from "react-canvas-draw"
import {useRef} from "react"
import Button from "./components/Button"

const App = () => {
  const canvasRef = useRef(undefined)

  

  const handleClick = () => {

    console.log(canvasRef.current.getSaveData());
   
}
  
  return (
    <div className="flex flex-col items-center">
    <input type="text" className="mb-4 mt-4 border border-black rounded-md"/>
     <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={window.screen.availWidth/2} canvasHeight={window.screen.availHeight/2} className="border border-black rounded-md mb-4"/>
     <Button handleClick={handleClick}/>
     </div>
      
  );
}


export default App;
