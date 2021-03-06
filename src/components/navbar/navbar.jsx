import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }));
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Link to="/">
          <NavbarBrand>React Redux</NavbarBrand>
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            {" | "}
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            {" | "}
            <NavItem>
              <Link to="/courses">Courses</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
