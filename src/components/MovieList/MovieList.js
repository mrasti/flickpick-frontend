// Component showing the movie listing
import React, { Component } from "react";
import Movie from "../Movie/Movie";
import Axios from "axios";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:3000/api/movies/";
    Axios.get(url).then(res => {
      console.log(res.data.results);
      let results = res.data.results;
      this.setState(prevState => ({
        movieInfo: results
      }));
      // console.log(movieInfo)
    });
  }
  render() {
    let list = this.state.movieInfo.map((item, index) => {
      console.log(item);
      return (
        <div className="movie-list" key={index}>
          <Movie
            title={item.title}
            overview={item.overview}
            posterImage={item.posterImage}
            id={item.id}
            userInfo={this.props.userInfo}
          />
        </div>
      );
    });
    return <div className="columns">{list}</div>;
  }
}

export default MovieList;
