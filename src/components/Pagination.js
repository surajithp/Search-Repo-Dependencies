import React from "react";

const Pagination = props => {
  const nextPageclick = () => {
    props.clicknext(props.reponame);
  };
  const prevPageclick = () => {
    props.clickprev(props.reponame);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <button disabled={props.disabled} onClick={prevPageclick}>
        Prev
      </button>
      {props.pagenumber}
      <button onClick={nextPageclick}>Next</button>
    </div>
  );
};

export default Pagination;
