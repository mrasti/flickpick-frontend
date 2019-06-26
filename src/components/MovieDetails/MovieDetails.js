// component about movie details
import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Axios from 'axios'
class MovieInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }
    }
    goHome = () => {
        this.props.history.push("/")
        // not a hard direct
      }
      componentDidMount() {
          let movieInfo = this.props.match.params.id;
          const url = `http://localhost:3000/api/movies/${movieInfo}`
          //pulling all the data information
        Axios.get(url)
        .then(res=>{
            console.log(res.data)
            let results = res.data.results;
            this.setState(
                prevState => ({
                    movie: results
                })
                );
            })
    }


    render() {
        
        let movieDetails = this.state.movie.map((item, index) => {
            //finds out if there is a video or not
            let video = function(){
                if (item.videoExists){
                    return(
                        <div>youtube video {item.videoKey}</div>
                    )
                }
            }
            //find the genres
            

            //returning the movie information
            let newYear = item.release_date
            return(
                <div className="movieDetails" key={index}>
                    <div><img src={item.posterImage}></img></div>
                    <div><h1>{item.title}</h1>
                    <article>
                        <p>
                            Year: {newYear.slice(0,4)}
                        </p>
                        <p>
                        Rating: {item.vote_average}
                        </p>
                    </article>
                    <div>{item.overview}</div></div>
                    {video()}

                </div>
            )
        })
        return (
            <div>
                {/* <button onClick={this.goHome}> Return to Movies</button> */}
                {movieDetails}
            </div>
        );
    }
}

export default MovieInfo;