import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container about">
          <h1>About Page</h1>
          <Link to="/">
            {" "}
            <Button color="primary" size="lg">
              Home
            </Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
