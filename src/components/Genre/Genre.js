import React, { Component } from "react";
import Axios from "axios";
import Movie from "../Movie/Movie";

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:3000/api/movies/allmovies";
    Axios.get(url).then(res => {
      let results = res.data.results;
      this.setState(prevState => ({
        movieInfo: results
      }));
    });
  }
  render() {
    let genreId = this.props.match.params.id;
    let list = this.state.movieInfo.map((item, index) => {
      if (item.genre_ids.includes(Number(genreId))) {
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
      }
      return "";
    });
    return <div className="columns">{list}</div>;
  }
}

export default Genre;
