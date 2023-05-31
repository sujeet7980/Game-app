/** @format */

import React, { useState } from "react";
import Rules from "./Rules";
import 'react-responsive-modal/styles.css';
const WordleNavbar = () => {
  
  return (
    <nav className=" wordle-nav d-flex justify-content-between">
        <Rules/>
      <div className="Game-name h2 ">
        <em>WORDLE</em>
      </div>
      <div className="right-side ">
        <span class="material-symbols-sharp ">leaderboard</span>
        <span class="material-symbols-sharp p-2">settings</span>
      </div>
    </nav>
  );
};

export default WordleNavbar;
