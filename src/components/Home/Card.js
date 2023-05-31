import React from "react";
import { Link } from "react-router-dom";
const Card = ({img1,img2,jump}) => {
  return (
    <div className='background'>
    <div className="wrapper">
        <div className="game-image1"><img src={img1} alt="" /></div>
        <div className="game-image3"><img src={img2} alt="" /></div>
        {/* <button className="Button play-now" > */}
          <Link to={jump} className="Button play-now text-white text-decoration-none">PLAY NOW</Link>
          {/* </button> */}
    </div>
 </div>
  );
};

export default Card;
