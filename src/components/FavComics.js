import React from "react";
import Cookies from "js-cookie";

const FavComics = ({ elem, favorisComics, setFavorisComics, index }) => {
  return (
    <div className="favCard">
      <div className="favContents">
        <div className="illustration">
          <img src={elem.picture} alt="comics"></img>
        </div>
      </div>
      <div className="favDescription">
        <h2>{elem.title}</h2>
        <p>{elem.description}</p>
        <button
          type={"button"}
          onClick={() => {
            let newFavoris = favorisComics.filter((fav, i) => index !== i);
            setFavorisComics(newFavoris);
            Cookies.set("favComics", newFavoris);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavComics;
