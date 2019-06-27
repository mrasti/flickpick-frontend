import React, { Component } from "react";
import Axios from "axios";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.search = this.search.bind(this);
  }

  search(evt){
    const url = 'http://localhost:3000/api/movies/search/';
    Axios.get(url + evt.target.value).then(res => {
        console.log(res);
    });
  }
  
  render() {
    return <div>
        <input type="text" placeholder="Search by title ..." onChange={this.search}></input>
        <button>Search</button>
    </div>
  }
}

export default Search;
