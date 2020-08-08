import React from "react";
import Cookies from "js-cookie";

const FavComics = ({ elem, favorisComics, setFavorisComics, index }) => {
  return (
    <div>
      {" "}
      <div>
        <div className="flexCard">
          <div className="card">
            <div className="picture">
              <img src={elem.picture} alt="comics"></img>
            </div>
            <div className="description">
              <h2>{elem.title}</h2>
              <p>{elem.description}</p>
              <button
                type={"button"}
                onClick={() => {
                  let newFavoris = favorisComics.filter(
                    (fav, i) => index !== i
                  );
                  setFavorisComics(newFavoris);
                  Cookies.set("favComics", newFavoris);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavComics;
