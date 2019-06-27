// Component that shows the movie card
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    let imgName = `https://image.tmdb.org/t/p/original/${
      this.props.posterImage
    }`;
    return (
      <div>
        {/* <Card style={{ width: '18rem' }}> */}
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={imgName} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {/* <Card.Text>{this.props.overview}</Card.Text> */}
            <Link to={"/movieinfo/" + this.props.id}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Movie;
