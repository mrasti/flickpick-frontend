import React, { Component } from "react";
import Axios from "axios";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchQuery: '', 
      };
    
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(evt){
    evt.preventDefault()
    console.log(evt.target.value)
    this.setState({searchQuery: evt.target.value})
    this.props.updateSearchResults(this.state.searchQuery)
    // const url = 'http://localhost:3000/api/movies/search/';
    // Axios.get(url + evt.target.value).then(res => {
    //     this.setState({searchQuery: res.data.results})
    //     console.log(this.state.searchQuery)
    // });
  }
  
  render() {
    return  <div>
                <input type="text" value={this.state.searchQuery} placeholder=" Search by title ..." onChange={this.handleQuery}></input>
            </div>
  }

//   render() {
//     return  <div>
//                 <input type="text" placeholder=" Search by title ..." onChange={this.props.triggerParentUpdate}></input>
//             </div>
//   }

}

export default Search;
