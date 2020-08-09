import React from "react";
import { Link } from "react-router-dom";
import characpic from "../assets/img/deadpool.jpg";
import spider from "../assets/img/spiderman.jpg";
import avengers from "../assets/img/avengers.jpg";
import iron from "../assets/img/iron.png";
const Home = () => {
  return (
    <>
      <main className="mainHome">
        <section className="menu">
          <img src={iron} alt="iron-man" className="iron"></img>

          <Link to="/user/signup">Wanna join the Team ?</Link>
          <Link to="/characters" className="Link">
            <h2 className="title">CHARACTERS</h2>
            <div className="section">
              <img src={characpic} alt="deadpool"></img>
            </div>
          </Link>

          <Link to="/comics" className="Link">
            <h2 className="title">COMICS</h2>
            <div className="section">
              <img src={spider} alt="spiderman"></img>
            </div>
          </Link>

          <Link to="/favoris" className="Link" style={{ marginBottom: "60px" }}>
            {" "}
            <h2 className="title">FAVORIS</h2>
            <div className="section">
              <img src={avengers} alt="avengers"></img>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
