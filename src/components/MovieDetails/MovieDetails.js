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
                    let youtubeLink = `https://www.youtube.com/embed/${item.videoKey}`
                    return(
                        <div>
                        <iframe width="560" height="315" src={youtubeLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    )
                }
            }
            //find the genres
            

            //returning the movie information
            let newYear = item.release_date
            let imgName = `https://image.tmdb.org/t/p/original/${item.posterImage}`
            return(
                <div className="movieDetails" key={index}>
                    <div>
                    <img src={imgName} alt="Movie Poster"></img>

                    </div>


                    <div
                    ><h1>{item.title}</h1>
                    <article>
                        <p>
                            Year: {newYear.slice(0,4)}
                        </p>
                        <p>
                        Rating: {item.vote_average}
                        </p>
                    </article>
                    <p> 
                    {item.overview}
                    </p>
                    {video()}
                    </div>
                    

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