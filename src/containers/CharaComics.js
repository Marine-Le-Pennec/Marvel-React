import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FicheCharaComics from "../components/FicheCharaComics";

import spinner from "../assets/img/spinner.gif";

const CharaComics = ({ setData, data, isLoading, setisLoading }) => {
  const { id } = useParams();

  console.log("début characomics");
  // Récupération des données via axios

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3100/character/${id}`);
      // console.log(response.data);
      setData(response.data);
      setisLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="spinner-container">
      <img src={spinner} alt="spinner" className="spinner"></img>
    </div>
  ) : (
    <div>
      {data.data.results.map((elem) => {
        return <FicheCharaComics elem={elem}></FicheCharaComics>;
      })}
      ;
    </div>
  );
};

export default CharaComics;
