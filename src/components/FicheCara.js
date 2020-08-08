import React from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FicheCara = ({ elem, favorisCara, setFavorisCara }) => {
  return (
    <div className="flexCard">
      <div className="card">
        <div className="picture">
          <img
            src={elem.thumbnail.path + "/standard_xlarge.jpg"}
            alt="personnages"
          ></img>
        </div>
        <div className="description">
          <Link
            style={{ textTransform: "none", color: "black" }}
            key={elem.id}
            to={`/character/${elem.id}`}
          >
            <h2>{elem.name}</h2>{" "}
          </Link>
          <p>{elem.description}</p>
          <FontAwesomeIcon
            icon="heart"
            className="fav"
            onClick={() => {
              let newTab = [...favorisCara];
              newTab.push({
                name: elem.name,
                description: elem.description,
                picture: elem.thumbnail.path + ".jpg",
              });
              Cookies.set("favCara", newTab, { expires: 200000 });
              setFavorisCara(newTab);
              alert("Ajouté aux favoris!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FicheCara;
