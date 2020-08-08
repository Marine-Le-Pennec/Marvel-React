import React from "react";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FicheComics = ({ elem, favorisComics, setFavorisComics }) => {
  // console.log("l'id des perso : ", elem.id);
  return (
    <div>
      {" "}
      <div className="flexCard">
        <div className="card-container">
          {" "}
          <div>
            <h2>{elem.title}</h2>{" "}
          </div>
          <div className="card">
            <div style={{ width: "100%" }}>
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

export default FicheComics;
