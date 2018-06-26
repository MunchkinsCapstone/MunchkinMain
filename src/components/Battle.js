import React from 'react';

const Battle = (props) => {
	return (
		<div>
			<div className='row'>
				<div className='col-12'>
					<img
						style={{ width: '100%' }}
						src='https://i.pinimg.com/736x/6f/c0/50/6fc050ee0177c09195b3bb067898b403--big-daddy-custom-cards.jpg'
						alt=''
					/>
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col-6' style={{ textAlign: 'center' }}>
					<h3>PLAYER(S)</h3>
					<h5>Attack: 1</h5>
					<h5>Buff: 0</h5>
					<h5>Debuff: 0</h5>
					<hr />
					<h4>TOTAL: 1</h4>
					<button className='btn btn-success'>Fight</button>
				</div>
				<div style={{ backgroundColor: 'white', textAlign: 'center', borderLeft: '1px solid grey' }} className='col-6'>
					<h3>MONSTER</h3>
					<h5>Attack: 18</h5>
					<h5>Buff: 10</h5>
					<h5>Debuff: 5</h5>
					<hr />
					<h4>TOTAL: 33</h4>
					<button className='btn btn-warning'>Run</button>
				</div>
			</div>
		</div>
	);
};

export default Battle;
