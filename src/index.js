import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

class GithubRepoSearch extends React.Component {
  render() {
    return <div><App/></div>;
  }
}

ReactDOM.render(<GithubRepoSearch />, document.getElementById("root"));
