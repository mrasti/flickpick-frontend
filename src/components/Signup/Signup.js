import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>

        <form>
          <div>
            <p>Email</p>
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
              onChange={this.props.handleInput}
              autoComplete="off"
            />
          </div>
          <input
            className="submit-button"
            value="Submit"
            type="submit"
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
