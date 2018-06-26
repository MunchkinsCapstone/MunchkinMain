import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
let { doors, treasures, Battle, log, Game, turnOrder } = require('../../index');

class GameBoard extends Component {
	constructor() {
		super();
		this.state = {
			game: {
				players: [],
				currentPlayer: {},
				playerOrder: [],
				active: false
			},
			// doors: {},
			// treasures: {},
			players: ['Graham', 'Yang', 'Raymond', 'Ozal']
		};
		this.startGame = this.startGame.bind(this);
		this.endTurn = this.endTurn.bind(this);
	}

	startGame() {
		if (!this.state.players.length) return log('There are no players!');
		const game = new Game(this.state.players);
		this.setState({
			game
		});
	}

	endTurn() {
		const { game } = this.state;
		game.endTurn();
		this.setState({
			game
		})
	}

	render() {
		const { game, players } = this.state;
		const playerOrder = game.playerOrder ? game.playerOrder : [];
		if (game.active) {
			log('PLAYERS: ' + game.playerOrder.map((player) => player.name));
			// log('DOORS: ' + doors.cards);
		}
		const logGame = () => log(game.currentPlayer.name);
		const logHand = () => log(game.currentPlayer.hand.length);
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<div className='row'>
							<div className='col-12 placeholder'>
								{game.playerOrder.map((player) => {
									return <PlayerCard key={player.name} player={player} />;
								})}
							</div>
						</div>
					</div>
					<div className='col-6'>
						<img id='gameBoard' src='http://www.worldofmunchkin.com/gameboard/img/cover_lg.jpg' />
					</div>
					<div className='col-3'>
						<div className='row'>
							<div className='col-12'>
								<div className='flexContainer'>
									<button type='button' className='btn btn-primary' onClick={game.knockKnock}>
										Kick Door
									</button>
									<button
										type='button'
										className='btn btn-danger'
										onClick={() => {
											const discarded = game.currentPlayer.hand.pop();
											console.log(`Discarded: ${discarded}`);
										}}
									>
										Discard Hand
									</button>
									<button type='button' className='btn btn-success' onClick={game.drawTreasure}>
										Draw Treasure
									</button>
									<button type='button' className='btn btn-warning' onClick={logHand}>
										Run
									</button>
									<button type='button' className='btn btn-secondary' onClick={game.lootRoom}>
										Loot Room
									</button>
									<button type='button' className='btn btn-info' onClick={this.endTurn}>
										End Turn
									</button>
									<button type='button' className='btn btn-dark' onClick={this.startGame}>
										Start Game
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GameBoard;
