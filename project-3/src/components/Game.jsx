import styled from "styled-components";
import { useState } from "react";

import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import Button, { OutlineBtn } from "../styled/Button";
import Rules from "./Rules";
import NumberSelector  from "./NumberSelector";

const Game = () => {
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [score,setScore]=useState(0);
  const [error,setError]=useState("");
  const [showRules,setShowRules]= useState(false);


  const generateRandomNumber =(min,max)=>{
    return Math.floor( Math.random()*(max-min)+min);
  }

  const rollDice=()=>{

    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev)=> randomNumber);

    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=>prev-2);
    }

    setSelectedNumber(undefined);
  }

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
          errore={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} rollDice={rollDice}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice}/>

      <div className="btns">
        <OutlineBtn onClick={resetScore}>Reset</OutlineBtn>
        <Button
        onClick={()=>setShowRules((prev)=>!prev)}
        >{showRules? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  );
}

export default Game;

const MainContainer = styled.main`
padding-top: 70px;
.top_section{
  display: flex;
  align-items: end;
  justify-content: space-around;
  
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
