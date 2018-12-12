import React from "react";

class SearchBar extends React.Component {
  state = { searchkeyword: "" };

  OnFormsubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.OnFormsubmit}>
          <input
            type="text"
            placeholder="Search here"
            onChange={event =>
              this.setState({ searchkeyword: event.target.value })
            }
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
