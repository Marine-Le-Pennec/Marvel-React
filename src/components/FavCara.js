import React from "react";
import Cookies from "js-cookie";

const FavCara = ({ elem, index, favorisCara, setFavorisCara }) => {
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
              <h2>{elem.name}</h2>
              <p>{elem.description}</p>
              <button
                type={"button"}
                onClick={() => {
                  // ou à la place de type "button" => event.preventDefault()=>pour eviter le rechargement de la page quand on clique
                  // Pour chaque perso favori, on le garde si son index est différent de notre prop "index"
                  let newFavoris = favorisCara.filter((fav, i) => index !== i);
                  setFavorisCara(newFavoris);
                  Cookies.set("favCara", newFavoris);
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

export default FavCara;
