import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import Movies from "../MovieList/MovieList";
import Home from "../Home/Home";
import "./Navigation.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Logo from "./flickpick.png";
class Navigation extends Component {
  render() {
    return (
      <div>
        {/* Start of Navigation */}
        <Navbar collapseOnSelect expand="lg" className="navBackground">
          {/* <Navbar.Brand href="/"><img src={Logo} alt="Logo"></img></Navbar.Brand> */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
              {/* <Nav.Link to='/movies'>Movies</Nav.Link> */}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* End of Navigation */}
      </div>
    );
  }
}

export default Navigation;
