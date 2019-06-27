import React, { Component } from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homeTop">
        <div style={{ width: "100%", height: "auto" }}>
          <ResponsiveEmbed aspect="a16by9">
            <embed
              type="image/svg+xml"
              src="https://player.vimeo.com/video/344644642"
            />
          </ResponsiveEmbed>
        </div>
      </div>
    );
  }
}

export default Home;
