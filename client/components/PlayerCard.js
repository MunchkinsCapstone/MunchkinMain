import React from 'react';

const PlayerCard = (props) => {
	const playerName = props.playerInfo;
	return (
		<div className='card text-white bg-secondary mb-3'>
			<div className='card-header'>{playerName}</div>
			<div className='card-body'>
				<h5 className='card-title'>Level: 1</h5>
				<p className='card-text'>Attack Power: 1</p>
			</div>
		</div>
	);
};

export default PlayerCard;
