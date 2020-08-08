import React from "react";
import star from "../assets/img/star.png";

const FicheCharaComics = ({ elem }) => {
  // console.log(elem);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px", marginTop: "100px" }}>RELATED COMICS</h1>
      </div>
      <div className="flexCard" style={{ marginTop: "70px" }}>
        <div className="card-container">
          <div className="card">
            <div style={{ width: "100%" }}>
              <img
                src={elem.thumbnail.path + "/standard_fantastic.jpg"}
                alt="comics"
                className="picture"
              ></img>
            </div>
          </div>
        </div>

        <div className="description">
          <p>{elem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FicheCharaComics;
