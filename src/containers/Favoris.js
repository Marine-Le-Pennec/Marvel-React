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
      <div>
        {" "}
        <h2 className="favorisTitle">Favorites characters</h2>
        {favorisCara.map((elem, index) => {
          
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
      </div>

      <div>
        <h2 className="favorisTitle">Favorites comics</h2>
        {favorisComics.map((elem, index) => {
          return (
            <div className="favCaraComics">
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
    </div>
  );
};

export default Favoris;
