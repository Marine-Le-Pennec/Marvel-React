import React from "react";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FicheComics = ({ elem, favorisComics, setFavorisComics }) => {
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

          <FontAwesomeIcon
            icon="heart"
            className="fav"
            onClick={() => {
              let newTab = [...favorisComics];
              newTab.push({
                name: elem.title,
                description: elem.description,
                picture: elem.thumbnail.path + ".jpg",
              });
              Cookies.set("favComics", newTab, { expires: 200000 });
              setFavorisComics(newTab);
              alert("Ajouté aux favoris!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FicheComics;
