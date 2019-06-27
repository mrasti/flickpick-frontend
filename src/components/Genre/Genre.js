import React, { Component } from 'react';
import Movie from "../Movie/Movie";
import Axios from "axios";


class Genre extends Component {
   
    
    constructor(props) {
        super(props);
        this.state = {
          movieInfo: [],
          genre: []
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

        const genreurl = "http://localhost:3000/api/genre/";
        Axios.get(genreurl).then(res => {
          console.log(res.data);
          console.log(typeof res.data);
          let results = res.data;
          this.setState(prevState => ({
            genre: results
          }));
        });
      }
      render() {
        let list = this.state.movieInfo.map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
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

export default Genre;