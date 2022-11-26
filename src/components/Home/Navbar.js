import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
          <div className="logo-div"><img src="logo.png" alt="" /> </div> 
           <span className="title"> Crazy Games</span>
      </div>
      <div className="right">
      <button class="button login" role="button"><span class="material-symbols-sharp">
person
</span>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
