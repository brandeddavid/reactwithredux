import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container home">
          <Jumbotron>
            <h1 className="display-3">React-Redux</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <Link to="/about">
                {" "}
                <Button color="primary" size="lg">
                  About
                </Button>
              </Link>
            </p>
          </Jumbotron>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
