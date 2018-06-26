import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; // withRouter
import { Lobby, HomePage, GameBoard } from './components';

class Routes extends Component {
	render() {
		// return <h1>hello from routes</h1>;
		return (
			<Switch>
				<Route exact path='/lobby' component={Lobby} />
				<Route exact path='/game' component={GameBoard} />
				<Route component={HomePage} />
			</Switch>
		);
	}
}

export default Routes;
