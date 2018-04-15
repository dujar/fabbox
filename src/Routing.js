import React, { Component } from 'react';
import {withRouter, Route, Switch} from 'react-router'
import Home from './pages/Home'
class Routing extends Component {

  render(){

    return(
      <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={Home}/>
        <Route path="/CV" exact component={Home}/>
      </Switch>
      </div>

    )
  }
}

export default withRouter(Routing)
