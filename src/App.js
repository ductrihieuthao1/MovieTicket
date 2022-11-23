import React from "react";
import "./App.css";

import MovieBooking from "./Ex5/MovieBooking";


class App extends React.Component {
  state = {
    a: 1,
    b: 1,
  };
  render() {
    return (
      <div>
     

 
        <MovieBooking />
       
      </div>
    );
  }
}

export default App;
