import React, { Component } from "react";
import Axios from "axios";
import Movie from "../Movie/Movie";
class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
  componentDidMount() {
    const url = `http://localhost:3000/api/user/${this.props.userId}`;
    Axios.get(url).then(res => {
      let results = res.data.favorites;
      this.setState(prevState => ({
        movieInfo: results
      }));
    });
  }

  render() {
    let list = this.state.movieInfo.map((item, index) => {
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

export default FavoriteList;
