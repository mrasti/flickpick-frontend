import React, { Component } from 'react';
import Movie from '../Movie/Movie'
import Axios from 'axios';
class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: null,
            posterImage: null,
            id: null,
            overview: null
        }
    }

    render() {
        const url = "http://localhost:3000/api/movies/"
        Axios.get(url)
        .then(res=>{
            console.log(res)
        })
        return (
            <div>
                <Movie></Movie>
                
            </div>
        );
    }
}

export default MovieList;