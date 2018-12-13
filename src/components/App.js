import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DisplayRepos from "./DisplayRepos";
import Pagination from "./Pagination";

class App extends React.Component {
  state = { data: [], pagenumber: 0 };
  onReposearch = async keyword => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}+language:javascript&sort=stars&order=desc&per_page=20&page=${this
        .state.pagenumber + 1}`
    );
    let reposdata = response.data.items;
    this.setState({ data: reposdata, pagenumber: this.state.pagenumber + 1 });
  };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <SearchBar onclick={this.onReposearch} />
        <DisplayRepos repositems={this.state.data} />
        <Pagination pagenumber={this.state.pagenumber} />
      </div>
    );
  }
}

export default App;
