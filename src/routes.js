import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Lobby, HomePage } from './components';

class Routes extends Component {
  render() {
    // return <h1>hello from routes</h1>;
    return (
      <Switch>
        <Route exact path="/lobby" component={Lobby} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
