import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Marvel.jpg";

const Header = () => {
  return (
    <div className="header-box">
      <header>
        <Link to="/">
          {" "}
          <img src={logo} alt="Marvel"></img>
        </Link>
        <div className="bar" style={{ marginTop: "30px" }}>
          {" "}
          WELCOME IN OUR MARVEL DATABASE
        </div>
      </header>
    </div>
  );
};

export default Header;
