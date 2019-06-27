import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Log Out</h2>

          <input
            className="submit-button"
            value="Log Out"
            type="submit"
            onClick={this.props.handleLogOut}
          />
        </form>
      </div>
    );
  }
}

export default Logout;
