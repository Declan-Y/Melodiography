import logo from './logo.svg';
import './App.css';
import CanvasDraw from "react-canvas-draw"
import {useRef, useEffect} from "react"

const App = () => {
  const canvasRef = useRef(null)

  

  const handleClick = () => {

    console.log(canvasRef.current.getSaveData());
   
}
  
  return (
    <>
    <input type="text"/>
     <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={window.screen.availWidth} canvasHeight={window.screen.availHeight}/>
     <button onClick = {handleClick}>Save</button>
     </>
      
  );
}


export default App;
