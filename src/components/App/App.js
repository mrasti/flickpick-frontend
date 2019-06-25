import React, { Component } from "react";
import Home from '../Home/Home';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import 'react-bootstrap';

class App extends Component {
  
  // render(){
  //   return (
  //     <div>Spaceholder</div>
     
      
  //     )
      
  //   }
  // }

  render(){
    return (
      <div>
        <Route path="/" exact component={Home}/>
      </div>
    );
  }

}
export default App;
