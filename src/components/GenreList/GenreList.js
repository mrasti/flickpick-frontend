import React, { Component } from 'react';
import Axios from 'axios'
import Movie from "../Movie/Movie";

class GenreList extends Component {
    constructor(props){
        super(props)
        this.state = {
            genre: [],
            movieRes:[]
        }
    }
    componentDidMount() {
        const movieurl = "http://localhost:3000/api/movies/";
        Axios.get(movieurl).then(
            res=>{
                console.log(res)
                let movieresults = res.data.results;
                this.setState(prevState => ({
                    movieRes: movieresults
                }))
            }
        )
        const url = "http://localhost:3000/api/genre/";
        Axios.get(url).then(res => {
          console.log(res.data);
          console.log(typeof res.data);
          let results = res.data;
          this.setState(prevState => ({
            genre: results
          }));
        });
        //end of get Genres from Axios
        
      }
      render() {
        let list = this.state.genre.map(item => {
                let movielist = this.state.movieRes.map((movieItem, index) => {
                    let findMovieImage = movieItem.genre_ids.map(genreResult =>{
                       if(16 === genreResult){
                        console.log(`${movieItem.id} ${movieItem.title}<< Item Name GenreREs ${genreResult} `)
                        return (
                            <div key={index}>
                                movie
                                {movieItem.title}
                                {/* <Movie
            title={movieItem.title}
            overview={movieItem.overview}
            posterImage={movieItem.posterImage}
            id={movieItem.id}
            userInfo={this.props.userInfo}
          /> */}
                            </div>
                        );
                       }
                    })
                })
        //   return (
        //     <div key={index}>

        //         <p>{item.name}</p>
        //     </div>
        //   );
        });


        return (
        <div className="columns">
        {list}
        this
        </div>)
      }
}

export default GenreList;