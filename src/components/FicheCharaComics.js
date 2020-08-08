import React from "react";

const FicheCharaComics = ({ elem }) => {
  // console.log(elem);
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

export default FicheCharaComics;
