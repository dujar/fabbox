import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar/NavBar';
class Routing extends Component {
  render() {
    return (
      <div className="m-1 flex-column justify-start align-center">
        <NavBar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/about" component={About} />
          {/* <Route path="/projects" component={Projects} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routing);
