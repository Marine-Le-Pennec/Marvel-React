import React from "react";
import axios from "axios";

const SearchTitle = ({ data, setData, offset }) => {
  let str = "";

  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            placeholder="Searching a comic"
            type="search"
            onChange={async (event) => {
              //   console.log(name);

              //   Faire la requete si l'utilisateur a entré au moins 2 lettres
              str += event.target.value;
              if (str.length > 2) {
                const response = await axios.get(
                  `http://localhost:3100/comics?title=${event.target.value}&offset=${offset}`
                );
                // console.log(response.data);
                setData(response.data);
              }
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchTitle;
