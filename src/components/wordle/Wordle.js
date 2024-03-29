/** @format */

import React from "react";
import GameBoard from "./GameBoard";
import KeyBoard from "./KeyBoard";
import { useState, createContext, useEffect } from "react";
import { defaultBoard } from "./GameBoard";
import { generateWords } from "./Words";
import GameSummary from "./GameSummary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import WordleNavbar from "./WordleNavbar";
export const AppContext = createContext();
const Wordle = () => {
  const emptyBoard=[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
  const [board, SetBoard] = useState(defaultBoard);
  const [currentState, setcurrentState] = useState({
    LetterPos: 0,
    currentAttempt: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [incorrectLetter, setIncorrectLetter] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameState, setGameState] = useState({
    gameEnd: false,
    guessWord: false,
  });
  const OnSelectLetter = (key) => {
    if (currentState.LetterPos > 4) return;
    let newBoard = [...board];
    newBoard[currentState.currentAttempt][currentState.LetterPos] = key;
    SetBoard(newBoard);
    setcurrentState({ ...currentState, LetterPos: currentState.LetterPos + 1 });
  };
  const OnEnter = () => {
    if (currentState.LetterPos !== 5) return;

    let word = "";
    for (let i = 0; i < 5; i++) {
      word += board[currentState.currentAttempt][i].toLowerCase();
    }
    // word+="\r";
    console.log(word,wordSet);
    if (wordSet.has(`${word}`)) {
      setcurrentState({
        ...currentState,
        currentAttempt: currentState.currentAttempt + 1,
        LetterPos: 0,
      });
      if (`${word}` === correctWord.toLowerCase()) {
        setGameState({ gameEnd: true, guessWord: true });
      } else if (currentState.currentAttempt === 5)
        setGameState({ gameEnd: true });
    } else {
      notify();
      const newBoard = [...board];
      // console.log(newBoard);
      for (let i = 0; i < 5; i++) {
        newBoard[currentState.currentAttempt][i] = "";
      }
      SetBoard(newBoard);
      setcurrentState({ ...currentState, LetterPos: 0 });
    }
  };
  const notify = () =>
    toast.warn("Word not found", {
      autoClose: 2000,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "toast-message",
    });
  const OnDelete = () => {
    if (currentState.LetterPos === 0) return;
    let newBoard = [...board];
    newBoard[currentState.currentAttempt][currentState.LetterPos - 1] = "";
    SetBoard(newBoard);
    setcurrentState({ ...currentState, LetterPos: currentState.LetterPos - 1 });
  };
  const restartGame = () => {
    SetBoard(emptyBoard);
    setcurrentState({LetterPos:0 ,currentAttempt:0});
    setIncorrectLetter([]);
    setNewWord();
    setGameState({gameEnd:false,guessWord:false});
  };
  const setNewWord = ()=>{
    generateWords().then((words) => {
      setWordSet(words.wordBank);
      setCorrectWord(words.todayWord.toUpperCase());
    });
  }
  useEffect(() => {
    setNewWord();
  }, []);

  return (
    <>
      <div className="wordle-Container">
        <WordleNavbar />
        <AppContext.Provider
          value={{
            restartGame,
            board,
            SetBoard,
            OnSelectLetter,
            OnEnter,
            OnDelete,
            currentState,
            wordSet,
            incorrectLetter,
            setIncorrectLetter,
            correctWord,
            gameState,
          }}
        >
          <GameBoard />
          {/* <GameSummary/> */}
          {gameState.gameEnd ? <GameSummary /> : <KeyBoard />}
        </AppContext.Provider>
      </div>
      <ToastContainer />
    </>
  );
};

export default Wordle;
