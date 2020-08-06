import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import FicheCara from "../components/FicheCara";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

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
    <span>En cours de chargement...</span>
  ) : (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "80px" }}>MARVEL CHARACTERS</h1>
      </div>

      <Search
        name={name}
        setName={setName}
        data={data}
        setData={setData}
        offset={offset}
      ></Search>

      <div>
        {data.data.results.map((elem, index) => {
          // console.log("l'id est égal à : ", elem.name);

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

export default Characters;
