import React from "react";
import Cookies from "js-cookie";

const FavComics = ({ elem, favorisComics, setFavorisComics, index }) => {
  return (
    <div>
      <div className="favContainer">
        <div className="illustration">
          <img src={elem.picture} alt="comics"></img>
        </div>
        <div className="">
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
    </div>
  );
};

export default FavComics;
