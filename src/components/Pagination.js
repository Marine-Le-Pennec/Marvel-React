import React from "react";

const Pagination = ({ data, offset, setOffset, page, setPage }) => {
  return (
    <div>
      <button
        onClick={() => {
          setOffset(offset - 100);
          setPage(page - 1);
        }}
      >
        Page précédente
      </button>

      <button
        onClick={() => {
          setOffset(offset + 100);
          setPage(page + 1);
        }}
      >
        Page suivante
      </button>
    </div>
  );
};

export default Pagination;
