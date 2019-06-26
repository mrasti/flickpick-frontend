import React, { Component } from "react";
import './App.css'
import Home from '../Home/Home';
import Movies from '../MovieList/MovieList'
import Navigation from '../Navigation/Navigation'
import MovieInfo from '../MovieDetails/MovieDetails'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      id: null,
    }
  }
  setInfo(id){
    this.setState({ id: id});
  }

  render(){
    return (
      <div>
        <Navigation></Navigation> 
        {/* Navigation bar (Responsive) */}
        <Route path="/" exact component={Home}/>
        <Route path="/movies" exact component={Movies}/>
        <Route path="/movieinfo/:id" render={(props)=> <MovieInfo setInfo={this.setInfo} {...props} {...this.state} />} />

      </div>
    );
  }

}
export default App;
