import React from 'react'
import { useCallback, useEffect, useContext } from "react";
import { AppContext } from "./Wordle";
import Key from './Keys'
const KeyBoard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const {
    OnSelectLetter,
    OnEnter,
    OnDelete,
    incorrectLetter
  } = useContext(AppContext);
  const handleKeyButton=useCallback((e)=>{
    if(e.key==='Enter'){
      OnEnter();
    }
    else if(e.key==='Backspace'){
      OnDelete();
    }
    else{
       keys1.forEach((key)=>{
        if((e.key)?.toLowerCase()===key.toLowerCase()) { 
         OnSelectLetter(key)
        }});
       keys2.forEach((key)=>{
        if((e.key)?.toLowerCase()===key.toLowerCase()) {
          OnSelectLetter(key)
        }});
       keys3.forEach((key)=>{
        if(e.key?.toLowerCase()=== (key).toLowerCase()) {
           OnSelectLetter(key)
        }});
    }
  });
  useEffect(()=>{
      document.addEventListener("keydown",handleKeyButton)
      return ()=>{
        document.removeEventListener("keydown",handleKeyButton)
      };
  },[handleKeyButton]);
  return (
    <div>
     <div className="keyboard" onKeyDown={handleKeyButton} >
      <div className="line1" >
        {keys1.map((keyValue) => {
         return <Key keyVal={keyValue} disabled={incorrectLetter.includes(keyValue)}/>
        })}
      </div>
      <div className="line2">
        {keys2.map((keyValue) => {
          return <Key keyVal={keyValue} disabled={incorrectLetter.includes(keyValue)}/>
        })}
      </div>
      <div className="line3">
       <Key keyVal={"DELETE"}  bigButton={"big"} />
        {keys3.map((keyValue) => {
          return <Key keyVal={keyValue} disabled={incorrectLetter.includes(keyValue)}/>;
        })}
        <Key keyVal={"ENTER"} bigButton={"big"}/>
      </div>
    </div>
    </div>
  )
}

export default KeyBoard
