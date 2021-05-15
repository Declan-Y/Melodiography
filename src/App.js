import logo from './logo.svg';
import './App.css';
import CanvasDraw from "react-canvas-draw"
import {useRef} from "react"

const App = () => {
  const canvasRef = useRef(null)

  

  const handleClick = () => {

    console.log(canvasRef.current.getSaveData());
   
}
  
  return (
    <div className="flex flex-col items-center">
    <input type="text"/>
     <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={window.screen.availWidth/2} canvasHeight={window.screen.availHeight/2} className="border border-black rounded-md"/>
     <button onClick = {handleClick}>Save</button>
     </div>
      
  );
}


export default App;
