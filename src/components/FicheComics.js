import React from "react";

const FicheComics = ({ elem }) => {
  // console.log("l'id des perso : ", elem.id);
  return (
    <div className="flexCard">
      <div className="card">
        <div className="picture">
          <img src={elem.thumbnail.path + ".jpg"} alt="comics"></img>
        </div>
        <div className="description">
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FicheComics;
