import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(evt) {
    evt.preventDefault();
    this.setState({ searchQuery: evt.target.value }, _ =>
      this.props.updateSearchResults(this.state.searchQuery)
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchQuery}
          placeholder=" Search by title ..."
          onChange={this.handleQuery}
        />
      </div>
    );
  }
}

export default Search;
