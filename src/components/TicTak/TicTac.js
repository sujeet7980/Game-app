/** @format */

import React, { useState, createContext } from "react";
import Square from "./Square";
import "./Tictac.css";
export const AppContext = createContext();
const TicTac = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [CurrentPlayer, setCurrentPlayer] = useState("X");
  const [GameEnd, setGameEnd] = useState(false);
  const opponent = "computer";
  const handleInputValue = (ind) => {
    if (GameEnd) {
      console.log("GameEnd");
      return;
    }
    if (Board[ind]) return;
    const newBoard = [...Board];
    newBoard[ind] = CurrentPlayer;
    setBoard(newBoard);
    if (isWinner(newBoard, CurrentPlayer)) {
      setGameEnd(true);
      ShowGameOver(CurrentPlayer);
      return;
    }
    if (GetEmptySpaces(newBoard).length === 0) {
      ShowGameOver("Draw");
      return;
    }
    if (opponent === "computer") {
      let checkBoard = newBoard;
      const id = minimax(checkBoard, "O").id;
      newBoard[id] = "O";
      setBoard(newBoard);
      if (isWinner(newBoard, "O")) {
        setGameEnd(true);
        ShowGameOver("computer");
        return;
      }
      if (GetEmptySpaces(newBoard).length === 0) {
        ShowGameOver("Draw");
        return;
      }
    } else {
      CurrentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    }
  };
  const minimax = (checkBoard, player) => {
    const EmptySpacesArray = GetEmptySpaces(checkBoard);
    if (isWinner(checkBoard, "O")) return { score: +10 };
    if (isWinner(checkBoard, "X")) return { score: -10 };
    if (EmptySpacesArray.length === 0) return { score: 0 };

    let moves = [];
    for (let i = 0; i < EmptySpacesArray.length; i++) {
      let id = EmptySpacesArray[i];
      let backup = checkBoard[id];
      checkBoard[id] = player;
      let move = {};
      move.id = id;
      if (player === "X") {
        move.score = minimax(checkBoard, "O").score;
      } else {
        move.score = minimax(checkBoard, "X").score;
      }
      checkBoard[id] = backup;
      moves.push(move);
    }
    let bestMove;
    if (player === "O") {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      let bestScore = +Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }
    return bestMove;
  };
  const GetEmptySpaces = (checkBoard) => {
    return checkBoard
      .map((x, i) => (x === null ? i : undefined))
      .filter((x) => x);
  };
  const isWinner = (checkBoard, player) => {
    const WinCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const flag = WinCases.some((el) => {
      const [a, b, c] = el;
      if (
        checkBoard[a] === player &&
        checkBoard[a] === checkBoard[b] &&
        checkBoard[a] === checkBoard[c]
      )
        return true;
    });
    return flag;
  };
  const ShowGameOver = (winner) => {
    let message;
    if (winner === "Draw") message = "Game Draw!!";
    else {
      if (opponent === "computer") {
        message =
          winner === "computer" ? `You Lose!!....Try Again!!` : `You Won 🏆`;
      } else {
        message = `Player : ${winner} wins 🏆`;
      }
    }
    const html = `
       <h2>${message}</h2>
        `;
    document.querySelector(".winner").innerHTML = html;
  };
  return (
    <AppContext.Provider value={{ Board, setBoard, handleInputValue }}>
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <hr className="line" />
        <div className="game-board-tictac">
          <div className="board-row">
            <Square index={0} />
            <Square index={1} />
            <Square index={2} />
          </div>
          <div className="board-row">
            <Square index={3} />
            <Square index={4} />
            <Square index={5} />
          </div>
          <div className="board-row">
            <Square index={6} />
            <Square index={7} />
            <Square index={8} />
          </div>
        </div>
        <div className="winner"></div>
        <button
          class="button-18"
          role="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Play Again
        </button>
      </div>
    </AppContext.Provider>
  );
};

export default TicTac;

