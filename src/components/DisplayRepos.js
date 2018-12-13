import React from "react";

const DisplayRepos = props => {
  return <div>{props.repositems.map((item, i) => console.log(item))}</div>;
};

export default DisplayRepos;
