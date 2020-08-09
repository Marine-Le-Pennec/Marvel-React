import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FicheCharaComics from "../components/FicheCharaComics";

import spinner from "../assets/img/spinner.gif";

const CharaComics = ({ setData, data, isLoading, setIsLoading }) => {
  const { id } = useParams();

  console.log("début characomics");
  // Récupération des données via axios

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-express-backend.herokuapp.com/character/${id}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id, setData, setIsLoading]);

  return isLoading ? (
    <div className="spinner-container">
      <img src={spinner} alt="spinner" className="spinner"></img>
    </div>
  ) : (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px", marginTop: "100px" }}>RELATED COMICS</h1>
      </div>
      <div style={{ display: "flex" }}>
        {data.data.results.map((elem) => {
          return <FicheCharaComics elem={elem}></FicheCharaComics>;
        })}
      </div>
      ;
    </div>
  );
};

export default CharaComics;
