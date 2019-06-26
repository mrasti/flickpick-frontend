import React, { Component } from "react";
import "./App.css";
import Home from "../Home/Home";
import Movies from "../MovieList/MovieList";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Navigation from "../Navigation/Navigation";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "react-bootstrap";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }
  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Navigation />
        {/* Navigation bar (Responsive) */}
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route
          path="/signup"
          render={props => {
            return (
              <Signup
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
              />
            );
          }}
        />
        <Route
          path="/login"
          render={props => {
            return (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
              />
            );
          }}
        />
      </div>
    );
  }
}
export default App;
