import React,{useContext, useEffect} from 'react'
import { AppContext } from "./Wordle";
const Letter = ({letterPos,Attempt}) => {
    const {
       board,correctWord,currentState,setIncorrectLetter
      } = useContext(AppContext);
      const letter=board[Attempt][letterPos];
      let correct,close;
      correct= correctWord[letterPos]===letter;
      close= !correct &&  letter!=="" && correctWord.includes(letter);
      const idVal = currentState.currentAttempt > Attempt && (correct?'correct':close?'close':'error');
      useEffect(()=>{
        if(letter!=="" && !correct && !close){
          setIncorrectLetter((prev)=>[...prev,letter]);
        }
      },[currentState.currentAttempt])
  return (
    <div className='input-element' id={idVal} >
      {letter}
    </div>
  )
}

export default Letter
