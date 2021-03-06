import React, { useEffect } from "react";
import axios from "axios";

import { baseUrl } from "../globals";
import FicheComics from "../components/FicheComics";
import Pagination from "../components/Pagination";
import SearchTitle from "../components/SearchTitle";

import spinner from "../assets/img/spinner.gif";

const Comics = ({
  setData,
  data,
  setIsLoading,
  isLoading,
  page,
  setPage,
  offset,
  setOffset,
  favorisComics,
  setFavorisComics,
}) => {
  // Récupération des données

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/comics?offset=${offset}`);

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [offset, setData, setIsLoading]);

  return isLoading ? (
    <div className="spinner-container">
      <img src={spinner} alt="spinner" className="spinner"></img>
    </div>
  ) : (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px", marginTop: "100px" }}>Comics</h1>
      </div>

      <SearchTitle data={data} setData={setData} offset={offset}></SearchTitle>
      <Pagination
        offset={offset}
        setOffset={setOffset}
        data={data}
        page={page}
        setPage={setPage}
      ></Pagination>

      <div className="caracter-container">
        {data.data.results.map((elem, index) => {
          return (
            <FicheComics
              elem={elem}
              favorisComics={favorisComics}
              setFavorisComics={setFavorisComics}
            ></FicheComics>
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

export default Comics;
