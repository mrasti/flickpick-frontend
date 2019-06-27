import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homeTop">
        <div className="embed-container">
          <iframe
            src="https://player.vimeo.com/video/344644642"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Home;
