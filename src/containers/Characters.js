import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import FicheCara from "../components/FicheCara";

const Characters = ({ setData, data, setIsLoading, isLoading }) => {
  // Récupération des données
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3100/characters");

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px" }}>MARVEL CHARACTERS</h1>
      </div>

      <div>
        {data.data.results.map((elem, index) => {
          // console.log("l'id est égal à : ", elem.id);
          return (
            <Link
              style={{ textTransform: "none", color: "black" }}
              key={elem.id}
              to={`/character/${elem.id}`}
            >
              <FicheCara elem={elem}></FicheCara>;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
