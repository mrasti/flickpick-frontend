import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="Signup">
      {/* Video background */}
 <div className="vimeo-wrapper">
<iframe src="https://player.vimeo.com/video/344893583?background=1&autoplay=1&loop=1&byline=0&title=0"
    frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen title="background"></iframe>
</div>
        <form>
          <div>
            <h2>Log <span>In</span></h2>
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
