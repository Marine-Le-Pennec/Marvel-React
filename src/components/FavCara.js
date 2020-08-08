import React from "react";
import Cookies from "js-cookie";

const FavCara = ({ elem, index, favorisCara, setFavorisCara }) => {
  return (
    <div className="favCard">
      <div className="favContents">
        <div className="illustration">
          <img src={elem.picture} alt="comics"></img>
        </div>
      </div>
      <div className="favDescription">
        <h2>{elem.name}</h2>
        <p>{elem.description}</p>
        <button
          type={"button"}
          onClick={() => {
            let newFavoris = favorisCara.filter((fav, i) => index !== i);
            setFavorisCara(newFavoris);
            Cookies.set("favCara", newFavoris);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavCara;
