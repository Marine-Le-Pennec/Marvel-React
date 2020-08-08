import React from "react";
import reactIcon from "../assets/img/react-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made by{" "}
        <a href="https://github.com/Marine-Le-Pennec">Marine Le Pennec</a>,
        student of{" "}
        <a href="https://www.lereacteur.io/" style={{ color: "#5C47D2" }}>
          Le Reacteur
        </a>{" "}
        in{" "}
      </span>
      <img
        src={reactIcon}
        className="react-icon"
        alt="react"
        style={{ paddingTop: "3px" }}
      />
    </div>
  );
};

export default Footer;
