import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FicheCharaComics from "../components/FicheCharaComics";

const CharaComics = ({ setData, data, isLoading, setisLoading }) => {
  const { id } = useParams();

  // Récupération des données via axios

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3100/character/${id}`);
      // console.log(response.data);
      setData(response.data);
      setisLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.data.results.map((elem, index) => {
        return <FicheCharaComics elem={elem}></FicheCharaComics>;
      })}
      ;
    </div>
  );
};

export default CharaComics;
