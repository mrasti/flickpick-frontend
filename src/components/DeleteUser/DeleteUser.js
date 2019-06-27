import React, { Component } from "react";
import Axios from "axios";

class DeleteUser extends Component {
  render() {
    return (
      <div>
        <p>Are you sure you want to delete your account?</p>
        <button onClick={this.props.deleteuser}>DELETE</button>
      </div>
    );
  }
}

export default DeleteUser;
