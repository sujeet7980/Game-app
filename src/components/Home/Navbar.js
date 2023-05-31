import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-transparent p-3">
    <div class="container-fluid co">
      <Link class="navbar-brand fs-4 text-white">GameGalaxy</Link>
      <div class="ml gap-5">
        <Link class="navbar-brand fs-4 text-white">Login</Link>
        <Link class="navbar-brand fs-4 text-white">Sign up</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
