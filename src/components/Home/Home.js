import React, { Component } from "react";
import Axios from "axios";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:3000/api/movies/";
    Axios.get(url).then(res => {
      let results = res.data.results;
      this.setState(prevState => ({
        movieInfo: results
      }));
    });
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

        {/* {list} */}
      </div>
    );
  }
}

export default Home;
