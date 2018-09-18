import React, { Component } from "react";
import NavBar from "../navbar/navbar";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container about">
          <h1>About Page</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
