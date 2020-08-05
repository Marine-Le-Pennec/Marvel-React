import React from "react";

const FicheCara = ({ elem }) => {
  return (
    <div className="flexCard">
      <div className="card">
        <div className="picture">
          <img src={elem.thumbnail.path + ".jpg"} alt="personnages"></img>
        </div>
        <div className="description">
          <h2>{elem.name}</h2>
          <p>{elem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FicheCara;
