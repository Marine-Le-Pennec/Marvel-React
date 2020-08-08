import React from "react";
import axios from "axios";

const Search = ({ setData, offset }) => {
  let str = "";

  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            placeholder="Searching a character"
            type="search"
            onChange={async (event) => {
              //    setName(event.target.value);
              //   console.log(name);

              //   Faire la requete si l'utilisateur a entré au moins 2 lettres
              str += event.target.value;
              if (str.length > 2) {
                const response = await axios.get(
                  `http://localhost:3100/characters?name=${event.target.value}&offset=${offset}`
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

export default Search;
