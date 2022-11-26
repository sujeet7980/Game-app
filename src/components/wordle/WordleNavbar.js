/** @format */

import React from "react";

const WordleNavbar = () => {
  return (
    <nav className=" wordle-nav d-flex justify-content-between">
      <div className="left-side p-2 ">
        <span class="material-symbols-sharp">help</span>
      </div>
      <div className="Game-name h1 ">
        <em>WORDLE</em>
      </div>
      <div className="right-side ">
        <span class="material-symbols-sharp p-2">leaderboard</span>
        <span class="material-symbols-sharp p-2">settings</span>
      </div>
    </nav>
  );
};

export default WordleNavbar;
