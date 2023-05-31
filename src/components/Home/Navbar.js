import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-transparent p-3">
    <div  className="container-fluid co" id="navbarSupportedContent">
      <div>
        <img src="logo.png" style={{width:"3rem",height:'3rem'}} ></img>
      <Link className="navbar-brand fs-4 text-white">GameGalaxy</Link>
      </div>
     
      <div className="ml gap-5 nav-option">
        <Link className="navbar-brand fs-4 text-white">Login</Link>
        <Link className="navbar-brand fs-4 text-white">Sign up</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
