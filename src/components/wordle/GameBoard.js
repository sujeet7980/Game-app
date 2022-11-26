import React, {useContext } from 'react'
import { AppContext } from "./Wordle";
import Letter from './Letter';
export  const defaultBoard=[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
const GameBoard = () => {
  return (
    <div className='game-board'>
      <div className="row">
        <Letter letterPos={0} Attempt={0} />
        <Letter letterPos={1} Attempt={0} />
        <Letter letterPos={2} Attempt={0} />
        <Letter letterPos={3} Attempt={0} />
        <Letter letterPos={4} Attempt={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} Attempt={1} />
        <Letter letterPos={1} Attempt={1} />
        <Letter letterPos={2} Attempt={1} />
        <Letter letterPos={3} Attempt={1} />
        <Letter letterPos={4} Attempt={1} />
      </div>
      <div className="row">
      <Letter letterPos={0} Attempt={2} />
        <Letter letterPos={1} Attempt={2} />
        <Letter letterPos={2} Attempt={2} />
        <Letter letterPos={3} Attempt={2} />
        <Letter letterPos={4} Attempt={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} Attempt={3} />
        <Letter letterPos={1} Attempt={3} />
        <Letter letterPos={2} Attempt={3} />
        <Letter letterPos={3} Attempt={3} />
        <Letter letterPos={4} Attempt={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} Attempt={4} />
        <Letter letterPos={1} Attempt={4} />
        <Letter letterPos={2} Attempt={4} />
        <Letter letterPos={3} Attempt={4} />
        <Letter letterPos={4} Attempt={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} Attempt={5} />
        <Letter letterPos={1} Attempt={5} />
        <Letter letterPos={2} Attempt={5} />
        <Letter letterPos={3} Attempt={5} />
        <Letter letterPos={4} Attempt={5} />
      </div>
    </div>
  )
}

export default GameBoard;
