import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice';

function GamePlay() {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber]= useState();
  const[currentDice, setCurrentDice ]= useState(1);
  const[error,setError]=useState("")

   
  const generateRandomNumber= (min,max)=>{
   
    return Math.floor(Math.random() * (max - min + 1)) + min;

   }

   const roleDice=()=>{
    if(!selectedNumber ){
      setError("you have not selected any number")
    return;
  }
     setError("");

    const randomNumber = generateRandomNumber(1,6);
    setCurrentDice(randomNumber);
    console.log(randomNumber);

    

    if(selectedNumber==randomNumber){
      setScore((prev)=>prev + randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
    
   }


  return (
    <Maincontainer>
        <div className='topsection'>
    <TotalScore
    score={score}
    />
    <NumberSelector
    error={error}
    selectedNumber={selectedNumber} 
    setSelectedNumber={setSelectedNumber}
    />
    </div>
    <RollDice 
    roleDice={roleDice}
    currentDice={currentDice}
    />
    </Maincontainer>
  )
}

export default GamePlay

const Maincontainer= styled.main`
    
    padding: 70px;

   .topsection{
    display: flex;
    justify-content: space-around;
    align-items: center;

   }

`
