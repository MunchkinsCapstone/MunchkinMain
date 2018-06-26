import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import ChatLog from './ChatLog';
import Battle from './Battle';

export default class GameBoard extends Component {
	constructor() {
		super();
		this.state = {
			players: [ 'Yang', 'Oz', 'Graham', 'Raymond', 'Josh', 'Dan' ],
			inBattle: false
		};
	}
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-5'>
						{this.state.players.map((player) => {
							return <PlayerCard key={player} player={player} />;
						})}
					</div>
					<div style={{ backgroundColor: 'white' }} className='col-4'>
						{this.state.inBattle ? (
							<Battle />
						) : (
							<div>
								<img
									alt='gameboard'
									style={{ width: '100%' }}
									src='http://www.worldofmunchkin.com/gameboard/img/cover_lg.jpg'
								/>
								<hr />
								<button className='btn btn-info'>Kick Door</button>{' '}
								<button className='btn btn-warning'>Draw Treasure</button>
							</div>
						)}
					</div>
					<div style={{ backgroundColor: 'lightgrey' }} className='col-3'>
						<ChatLog />
					</div>
				</div>
			</div>
		);
	}
}
