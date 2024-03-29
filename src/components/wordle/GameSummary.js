/** @format */

import React, { useContext } from "react";
import { AppContext } from "./Wordle";
const GameSummary = () => {
  const { correctWord, gameState, restartGame } = useContext(AppContext);
  return (
    <div>
      <h2>{gameState.guessWord ? "You won" : "You failed!!"}</h2>
      <h1>Right Word : {correctWord}</h1>
       <button
        class="newGame btn btn-primary text-white"
        onClick={() => {
          restartGame();
        }}
      >
        {" "}
        Play Again
      </button> 
    </div>
  );
};

export default GameSummary;
