import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import ImgPlace from './250x200.jpg';

class Movie extends Component {
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImgPlace} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        );
    }
}

export default Movie;