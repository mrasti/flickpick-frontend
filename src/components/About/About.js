import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About">
            
            <h2>Abo<span>ut</span></h2>
            <h4>Welcome to FlickPick</h4>
            <h3>This App was built by:</h3>
            <span>Shane Vann-Shirley, Paula Bannerman, Melika Rasti</span>
            <p>Our goal is to create a movie app that allows a user to log in, search for movies by various identifiers, and then store movies in a to-do list</p>
            <p>Models Used</p>
            <ul>
                <h3>User</h3>
                <li>name: String,</li>
                <li>password: String,</li>
                <li>listOfMovies: []</li>
                <h3>Movie</h3>
                <li>id: Number,</li>
                <li>title: String,</li>
                <li>overview: String,</li>
                <li>popularity: Number,</li>
                <li>adult: Boolean,</li>
                <li>original_language: String,</li>
                <li>posterImage: String,</li>
                <li>backdropImage: String,</li>
                <li>videoExists: Boolean,</li>
                <li>videoKey: String,</li>
                <li>vote_average: Number,</li>
                <li>release_date: Date,</li>
                <li>genre_ids: Array,</li>
                <li>cast_crew: [],</li>
                <li>genres: []</li>
  
            </ul>


            </div>
        );
    }
}

export default About;