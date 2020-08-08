import React, { useEffect } from "react";
import axios from "axios";

import FicheCara from "../components/FicheCara";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import spinner from "../assets/img/spinner.gif";

const Characters = ({
  setData,
  data,
  setIsLoading,
  isLoading,
  offset,
  setOffset,
  page,
  setPage,
  name,
  setName,
  favorisCara,
  setFavorisCara,
}) => {
  // Récupération des données
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3100/characters?&offset=${offset}`
    );

    setData(response.data);
    console.log(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [offset, name]);

  return isLoading ? (
    <div className="spinner-container">
      <img src={spinner} alt="spinner" className="spinner"></img>
    </div>
  ) : (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px", marginTop: "100px" }}>
          MARVEL CHARACTERS
        </h1>
      </div>

      <Search
        name={name}
        setName={setName}
        data={data}
        setData={setData}
        offset={offset}
      ></Search>

      <div className="caracter-container">
        {data.data.results.map((elem, index) => {
          console.log("l'id de l'element : ", elem.id);

          return (
            <FicheCara
              elem={elem}
              key={elem.id}
              favorisCara={favorisCara}
              setFavorisCara={setFavorisCara}
            ></FicheCara>
          );
        })}
      </div>

      <Pagination
        offset={offset}
        setOffset={setOffset}
        data={data}
        page={page}
        setPage={setPage}
      ></Pagination>
    </div>
  );
};

export default Characters;
