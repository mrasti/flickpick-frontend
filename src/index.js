import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App.js";
import "./index.css";
import { Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/" render={props => <App {...props} />} />
  </Router>,
  document.getElementById("root")
);
