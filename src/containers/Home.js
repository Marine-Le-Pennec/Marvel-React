import React from "react";
import { Link } from "react-router-dom";
import characpic from "../assets/img/deadpool.jpg";
import spider from "../assets/img/spiderman.jpg";
import avengers from "../assets/img/avengers.jpg";
const Home = () => {
  return (
    <>
      <main className="mainHome">
        <section className="menu">
          <Link to="/characters">
            <div className="section">
              <h2>CHARACTERS</h2>
              <img src={characpic} alt="deadpool"></img>
            </div>
          </Link>

          <Link to="/comics">
            <div className="section">
              <h2>COMICS</h2>
              <img src={spider} alt="spiderman"></img>
            </div>
          </Link>

          <div className="section">
            <h2>FAVORIS</h2>
            <img src={avengers} alt="avengers"></img>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
