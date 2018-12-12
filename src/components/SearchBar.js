import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search here" />
        </form>
        <button type="submit">Search</button>
      </div>
    );
  }
}

export default SearchBar;
