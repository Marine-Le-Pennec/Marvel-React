import React, { useEffect } from "react";
import axios from "axios";

import FicheComics from "../components/FicheComics";
import Pagination from "../components/Pagination";
import SearchTitle from "../components/SearchTitle";

const Comics = ({
  setData,
  data,
  setIsLoading,
  isLoading,
  page,
  setPage,
  offset,
  setOffset,
}) => {
  // Récupération des données
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3100/comics?offset=${offset}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px" }}>Comics</h1>
      </div>

      <SearchTitle data={data} setData={setData} offset={offset}></SearchTitle>
      <div>
        {data.data.results.map((elem, index) => {
          return <FicheComics elem={elem}></FicheComics>;
        })}
      </div>
      <Pagination
        offset={offset}
        setOffset={setOffset}
        data={data}
        page={page}
        setPage={setPage}
      ></Pagination>
    </>
  );
};

export default Comics;
