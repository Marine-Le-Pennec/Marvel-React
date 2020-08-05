import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          {" "}
          <img src={logo}></img>
        </Link>
      </header>
    </div>
  );
};

export default Header;
