import React from 'react';
import Modal from './Modal';

const PlayerCard = (props) => {
	const name = props.player;
	return (
		<div className='card text-white bg-secondary mb-3'>
			<div className='card-header player-card-top'>
				<h5>Level: 1</h5>
				<h4>{name}</h4>
				<h5>Attack: 1</h5>
			</div>
			<div className='card-body player-card-button'>
				<Modal />
				<button type='button' className='btn btn-light'>
					Equipment
				</button>
				<button type='button' className='btn btn-white'>
					Assist
				</button>
				<button type='button' className='btn btn-white'>
					Trade
				</button>
			</div>
		</div>
	);
};

export default PlayerCard;
