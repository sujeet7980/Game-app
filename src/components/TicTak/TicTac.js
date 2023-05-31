/** @format */

import React, { useState, createContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import Square from "./Square";
import "./Tictac.css";
export const AppContext = createContext();
const TicTac = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [CurrentPlayer, setCurrentPlayer] = useState("X");
  const [GameEnd, setGameEnd] = useState(false);
  const [opponent, setOpponent] = useState("computer");
  // const opponent = "computer";
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
      // console.log(id);
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
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameEnd(false);
    document.querySelector(".winner").innerHTML = "";
  };
  return (
    <AppContext.Provider value={{ Board, setBoard, handleInputValue }}>
      <nav className=" wordle-nav d-flex justify-content-between text-white">
        {/* <Rules/> */}
        <div className="d-flex ">
          <span className=" d-flex justify-self-center align-self-center">
            Player
          </span>
          <Form.Group className="m-1">
            {/* <Form.Label htmlFor="demo-select-small">Age</Form.Label> */}
            <Form.Select
              id="demo-select-small"
              value={opponent}
              onChange={(e) => {
                setOpponent(e.target.value);
                restartGame();
              }}
              size="sm"
            >
              <option value="computer">1 </option>
              <option value="player">2 </option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="Game-name h2">
          <em>Tic-Tac-Toe</em>
        </div>
        <div className="right-side ">
          <span class="material-symbols-sharp ">leaderboard</span>
          <span class="material-symbols-sharp p-2">settings</span>
        </div>
      </nav>
      <div className="container w-75">
        <div class="game-board-tictac">
          <div class="row">
            <div class="col border-bottom border-end">
              <Square index={0} />
            </div>
            <div class="col border-bottom">
              <Square index={1} />
            </div>
            <div class="col border-bottom border-start">
              <Square index={2} />
            </div>
          </div>
          <div class="row">
            <div class="col border-end">
              <Square index={3} />
            </div>
            <div class="col">
              <Square index={4} />
            </div>
            <div class="col border-start">
              <Square index={5} />
            </div>
          </div>
          <div class="row">
            <div class="col border-top border-end">
              <Square index={6} />
            </div>
            <div class="col border-top">
              <Square index={7} />
            </div>
            <div class="col border-top border-start">
              <Square index={8} />
            </div>
          </div>
        </div>

        <div className="winner mx-auto"></div>
        <button
          className="button-18 mx-auto"
          role="button"
          onClick={() => {
            restartGame();
          }}
        >
          Play Again
        </button>
      </div>
    </AppContext.Provider>
  );
};

export default TicTac;
