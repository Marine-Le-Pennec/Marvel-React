import React, { useEffect } from "react";
import axios from "axios";

import FicheComics from "../components/FicheComics";

const Comics = ({ setData, data, setIsLoading, isLoading }) => {
  // Récupération des données
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3100/comics");

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
        <h1 style={{ fontSize: "80px" }}>Comics</h1>
      </div>
      <div>
        {data.data.results.map((elem, index) => {
          // console.log(elem);

          return <FicheComics elem={elem}></FicheComics>;
        })}
      </div>
    </>
  );
};

export default Comics;
