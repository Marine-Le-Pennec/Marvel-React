import React from "react";

const FicheCharaComics = ({ elem }) => {
  // console.log(elem);
  return (
    <div>
      <div
        className="flexCard"
        style={{ margin: "70px 0 40px 80px", flexWrap: "flex-wrap" }}
      >
        <div className="card-container">
          <div className="card">
            <div style={{ width: "100%" }}>
              <img
                src={elem.thumbnail.path + "/standard_fantastic.jpg"}
                alt="comics"
                className="picture"
              ></img>
            </div>
          </div>
        </div>

        <div className="description">
          <p>{elem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FicheCharaComics;
