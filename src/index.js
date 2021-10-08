import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MovieSearch from "./MovieSearch";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">JustFind Movie</h1>
        <MovieSearch />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
