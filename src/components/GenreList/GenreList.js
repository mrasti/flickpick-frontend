import React, { Component } from "react";
import Axios from "axios";
import Filmstrip from "./filmstrip.png";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Config from "../../config";

class GenreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      id: null
    };
  }
  componentDidMount() {
    const url = Config.serverURL + "/genre/";
    Axios.get(url).then(res => {
      let results = res.data;
      this.setState(prevState => ({
        genre: results
      }));
    });
    //end of get Genres from Axios
  }

  render() {
    let list = this.state.genre.map((item, index) => {
      return (
        <div key={index} className="movie-list genre">
          {/* Beginning of the card */}

          <Card id="genre-card" style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={Filmstrip}
              className="filmstripBckgrnd"
            />
            <Card.Body>
              <Card.Title id="genre-card-title">{item.name}</Card.Title>
              <Card.Text>{this.props.overview}</Card.Text>
              <Link to={"/genres/id/" + item.id}>
                <Button id="genre-button" variant="primary">
                  Enter here
                </Button>
              </Link>
            </Card.Body>
          </Card>

          {/* End of the card */}
        </div>
      );
    });

    return <div className="columns">{list}</div>;
  }
}

export default GenreList;
