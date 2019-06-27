import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
  render() {
    
    return (
      <div className="homeTop">

<div className='embed-container'><iframe src='https://player.vimeo.com/video/344644642' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
      </div>
    );
  }
}

export default Home;
