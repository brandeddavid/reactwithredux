import React, { Component } from "react";
import NavBar from "../navbar/navbar";

class Courses extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">Courses Page</div>
      </React.Fragment>
    );
  }
}

export default Courses;
