import React, { useState } from "react";
import "./navbar-styles.scss";

const NavBar = () => {
  const [flag, setFlag] = useState(true);

  const changeFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="topnav">
      <img className="logo" src="https://picsum.photos/250/50" alt="logo"></img>
      <button className="signin-button" onClick={changeFlag}>
        {flag ? "Sign in" : "Sign out"}
      </button>
    </div>
  );
};

export default NavBar;
