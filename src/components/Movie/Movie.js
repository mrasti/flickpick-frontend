import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Movie extends Component {
    
    render() {
        let imgName = `https://image.tmdb.org/t/p/original/${this.props.posterImage}`
        return (
            <div>
                {/* <Card style={{ width: '18rem' }}> */}
                <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={imgName} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    {/* <Card.Text>{this.props.overview}</Card.Text> */}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        );
    }
}

export default Movie;