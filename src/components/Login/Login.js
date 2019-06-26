import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <h2>Log In</h2>
            <p>Username</p>
            <input
              className="input-field"
              type="text"
              name="email"
              onChange={this.props.handleInput}
              autoComplete="off"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className="input-field"
              type="password"
              name="password"
              autoComplete="off"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={this.props.handleLogIn}
          />
        </form>
      </div>
    );
  }
}

export default Login;
