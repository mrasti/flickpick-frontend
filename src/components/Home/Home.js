import React, { Component } from "react";
import Movie from "../Movie/Movie";
import Axios from "axios";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Genre from '../GenreList/GenreList'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }
//   componentDidMount() {
//     const url = "http://localhost:3000/api/movies/";
//     Axios.get(url).then(res => {
//     //   console.log(res.data.results);
//       let results = res.data.results;
//       this.setState(prevState => ({
//         movieInfo: results
//       }));
//       // console.log(movieInfo)
//     });
//   }
  render() {
    // let list = this.state.movieInfo.map((item, index) => {
    //   console.log(item);
    //   return (
    //     <div key={index}>
    //       <Movie
    //         title={item.title}
    //         overview={item.overview}
    //         posterImage={item.posterImage}
    //         id={item.id}
    //       />
    //     </div>
    //   );
    // });
    return (
      <div className="homeTop">

<div className='embed-container'><iframe src='https://player.vimeo.com/video/344644642' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>


          {/* <Genre></Genre> */}
          {/* <ResponsiveEmbed>
            <embed
            //   type="image/svg+xml"
              src="https://player.vimeo.com/video/344644642"
            />
          </ResponsiveEmbed> */}
        {/* <div style={{ width: "100%", height: "auto" }}>
          <ResponsiveEmbed aspect="a16by9">
            <embed
              type="image/svg+xml"
              src="https://player.vimeo.com/video/344644642"
            />
          </ResponsiveEmbed>
        </div> */}

        {/* {list} */}
      </div>
    );
  }
}

export default Home;
