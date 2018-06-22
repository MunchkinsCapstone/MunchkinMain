import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage';

class Routes extends Component {
  render() {
    // return <h1>hello from routes</h1>;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
