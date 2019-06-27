import React, { Component } from 'react';
import Axios from 'axios'
// import Movie from "../Movie/Movie";
import Filmstrip from './filmstrip.png'
import {Card, Button} from 'react-bootstrap';
import {Route, Link} from "react-router-dom";

class GenreList extends Component {
    constructor(props){
        super(props)
        this.state = {
            genre: [],
            movieRes:[]
        }
    }
    componentDidMount() {
        const movieurl = "http://localhost:3000/api/movies/allmovies";
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
        let list = this.state.genre.map((item, index) => {
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
          return (
            <div key={index}>
{/* Beginning of the card */}

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Filmstrip} className="filmstripBckgrnd"/>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    {/* <Card.Text>{this.props.overview}</Card.Text> */}
    <Link to={"/movieinfo/" + this.props.id}>

    <Button variant="primary">Enter here</Button>
    </Link>
    
  </Card.Body>
</Card>


{/* End of the card */}
            </div>
          );
        });


        return (
        <div className="columns">
        {list}
        </div>)
      }
}

export default GenreList;