import React from "react";

const Pagination = ({ data, offset, setOffset, page, setPage }) => {
  return (
    <div>
      <div>
        {data.data.offset > 0 && (
          <button
            onClick={() => {
              setOffset(offset - 100);
              setPage(page - 1);
            }}
          >
            Page précédente
          </button>
        )}
        <span style={{ width: "30px" }}>{page}</span>
        {data.data.offset < data.data.total && (
          <button
            onClick={() => {
              setOffset(offset + 100);
              setPage(page + 1);
            }}
          >
            Page Suivante
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
