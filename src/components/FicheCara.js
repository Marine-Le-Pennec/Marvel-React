import React from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FicheCara = ({ elem, favorisCara, setFavorisCara }) => {
  return (
    <div>
      {" "}
      <div className="flexCard">
        <div className="card-container">
          {" "}
          <div>
            <Link
              className="Link"
              style={{ textTransform: "none", color: "black" }}
              key={elem.id}
              to={`/character/${elem.id}`}
            >
              <h2>{elem.name}</h2>{" "}
            </Link>
          </div>
          <div className="card">
            <div style={{ width: "100%" }}>
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
              <img
                src={elem.thumbnail.path + "/standard_fantastic.jpg"}
                alt="personnages"
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

export default FicheCara;
