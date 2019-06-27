import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="vimeo-wrapper">
   <iframe src="https://player.vimeo.com/video/344893583?background=1&autoplay=1&loop=1&byline=0&title=0"
           frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
        <form>
          <h2>Sign <span>Up</span></h2>

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
