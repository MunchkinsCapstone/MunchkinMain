import React from 'react';

const Card = (props) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img
				className='card-img-top'
				src='http://d1wkgvkiekr2mp.cloudfront.net/wp-content/uploads/2012/03/Munchkin-8-Doors-16-657x1024.jpg'
				alt='Card'
			/>
			<div className='hand card-body container'>
				<button href='#' className='btn btn-primary'>
					Use
				</button>{' '}
				<button className='btn btn-primary'>Discard</button>
			</div>
		</div>
	);
};

export default Card;
