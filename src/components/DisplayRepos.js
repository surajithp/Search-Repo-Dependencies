import React from "react";
import DisplaySingleRepo from "./DisplayRepo";

const DisplayRepos = props => {
  return (
    <div>
      {props.repositems.map((item, i) => (
        <DisplaySingleRepo key={item.id} serialno={i + 1} {...item} />
      ))}
    </div>
  );
};

export default DisplayRepos;
