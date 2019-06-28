import React, { Component } from "react";
import Axios from "axios";
// import Movie from "../Movie/Movie";
import Filmstrip from "./filmstrip.png";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class GenreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: [],
      id: null
    };
  }
  componentDidMount() {
    const url = "http://localhost:3000/api/genre/";
    Axios.get(url).then(res => {
      let results = res.data;
      this.setState(prevState => ({
        genre: results
      }));
    });
    //end of get Genres from Axios
  }
  // idSetting = function(item){
  //   let newId = item.id
  //       this.setState(prevState => ({
  //         id: newId
  //       }));
  // }

  render() {
    let list = this.state.genre.map((item, index) => {
      // console.log(item)

      // console.log(newId)
      // this.setState(prevState => {
      //   id: newId,
      // })
      return (
        <div key={index} className="movie-list genre">
          {/* Beginning of the card */}

          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={Filmstrip}
              className="filmstripBckgrnd"
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{this.props.overview}</Card.Text>
              <Link to={"/genres/id/" + item.id}>
                <Button variant="primary">Enter here</Button>
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
