import React,{useContext} from 'react'
import { AppContext } from './TicTac';
const Square = ({index}) => {
    const {Board,setBoard,handleInputValue}=useContext(AppContext);
    let value=Board[index];
  return (
    <div className='square' onClick={()=>{handleInputValue(index)}}>
      {value}
    </div>
  )
}

export default Square
