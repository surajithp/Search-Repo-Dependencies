import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onReposearch = keyword => {
    console.log("Hi");
  };
  render() {
    return (
      <div>
        <SearchBar onclick={this.onReposearch} />
      </div>
    );
  }
}

export default App;
