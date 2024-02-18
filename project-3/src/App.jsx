import StartGame from "./components/StartGame";
import Game from "./components/Game";
import "./App.css";
import { useState } from "react";


function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
  };

  return (

    
    <>
    {isGameStarted?<Game/>:<StartGame toggle={toggleGamePlay}/>};

    
    
    </>
   
  )
}

export default App;

