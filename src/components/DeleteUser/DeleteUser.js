import React, { Component } from "react";

class DeleteUser extends Component {
  render() {
    return (
      <div className="Signup">
         <div className="vimeo-wrapper">
   <iframe src="https://player.vimeo.com/video/344893583?background=1&autoplay=1&loop=1&byline=0&title=0"
           frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen  title="background"></iframe>
</div>
      <h2>Dele<span>te</span></h2> 
        <p>Are you sure you want to delete your account?</p>
        <button onClick={this.props.deleteuser}>DELETE  </button>
      </div>
    );
  }
}

export default DeleteUser;
