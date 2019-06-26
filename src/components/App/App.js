import React, { Component } from "react";
import "./App.css";
import Home from "../Home/Home";
import Movies from "../MovieList/MovieList";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Login />
        {/* Navigation bar (Responsive) */}
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
      </div>
    );
  }
}
export default App;
