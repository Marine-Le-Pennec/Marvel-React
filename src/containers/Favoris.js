import React from "react";
import Cookies from "js-cookie";
import FavCara from "../components/FavCara";
import FavComics from "../components/FavComics";

const Favoris = ({
  favorisComics,
  setFavorisComics,
  favorisCara,
  setFavorisCara,
}) => {
  Cookies.get("favComics");
  Cookies.get("favCara");

  //   console.log(favoris);
  return (
    <div className="favorisContainer">
      <h2 className="favorisTitle">Favorites characters</h2>
      {favorisCara.map((elem, index) => {
        console.log("favorite elem :", elem);
        return (
          <div className="favCaraComics">
            <FavCara
              elem={elem}
              index={index}
              favorisCara={favorisCara}
              setFavorisCara={setFavorisCara}
            ></FavCara>
          </div>
        );
      })}

      <h2 className="favoriteTitle">Favorites comics</h2>
      {favorisComics.map((elem, index) => {
        return (
          <div>
            <FavComics
              elem={elem}
              index={index}
              favorisComics={favorisComics}
              setFavorisComics={setFavorisComics}
            ></FavComics>
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;
