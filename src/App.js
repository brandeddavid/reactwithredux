import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/index";
import About from "./components/about/index";
import Courses from "./components/courses/index";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={Courses} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
