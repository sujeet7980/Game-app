import React,{useContext}from 'react'
import { AppContext } from './Wordle'
const Keys = ({keyVal,bigButton,disabled}) => {
    const {OnDelete,OnEnter,OnSelectLetter}=useContext(AppContext)
    const selectLetter=()=>{
        if(keyVal==='DELETE'){
          OnDelete();
        }
        else if(keyVal==='ENTER'){
            OnEnter();
        }
        else {
            OnSelectLetter(keyVal);
        }
    }
  return (
    <div className='keyboard-button' id={bigButton?'big':disabled && 'disabled'} onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Keys
