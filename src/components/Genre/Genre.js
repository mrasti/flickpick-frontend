// import React, { Component } from 'react';
// import Axios from 'axios'
// // import Movie from "../Movie/Movie";
// // import Filmstrip from '../filmstrip.png'
// import {Card, Button} from 'react-bootstrap';
// import {Link} from "react-router-dom";
// import Movie from "../Movie/Movie";

// class Genre extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movieInfo: []
//     };
//   }

//   componentDidMount() {
//     const url = "http://localhost:3000/api/movies/allmovies";
//     Axios.get(url).then(res => {
//       let results = res.data.results;
//       this.setState(prevState => ({
//         movieInfo: results
//       }));
//     });
//   }

//   render() {<div></div>
// let genreId = this.props.match.params.id;
// let list = this.state.movieInfo.map((item, index) => {
//   if(item[0].results.genre_ids.includes(genreId))
//   return (
//     <div className="movie-list" key={index}>
//       <Movie
//         title={item.title}
//         overview={item.overview}
//         posterImage={item.posterImage}
//         id={item.id}
//         userInfo={this.props.userInfo}
//       />
//     </div>
//   );
// });
// console.log(this.state.movieInfo)
// return <div className="columns">{list}</div>;
//   }
//     let genreId = this.props.match.params.id
//     let movielist = this.state.movieInfo.map((item, index) => {
//       let findMovieImage = item.genre_ids.map(genreResult =>{
//          if(genreId === genreResult){

//           console.log(`${item.id} ${item.title}<< Item Name GenreREs ${genreResult} `)
//           return (
//             <div key={index} className="movie-list">
// {/* Beginning of the card */}

// <Card style={{ width: '15rem' }}>
//   {/* <Card.Img variant="top" src={Filmstrip} className="filmstripBckgrnd"/> */}
//   <Card.Body>
//     <Card.Title>{item.name}</Card.Title>
//     {/* <Card.Text>{this.props.overview}</Card.Text> */}
//     <Link to={"/movieinfo/" + this.props.id}>

//     <Button variant="primary">Enter here</Button>
//     </Link>
    
//   </Card.Body>
// </Card>

// {/* End of the card */}
//             </div>
//           );
//          }
//       })
//   })

  //   return (<div className="columns">{list}</div>);
  // } 

// export default Genre;