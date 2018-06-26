import React from 'react';
import Card from './Card';

const Modal = (props) => {
	// return (
	// 	<div>
	// 		<button type='button' className='btn btn-white' data-toggle='modal' data-target='#exampleModal'>
	// 			Hand
	// 		</button>

	// 		<div
	// 			className='modal fade'
	// 			id='exampleModal'
	// 			tabIndex='-1'
	// 			role='dialog'
	// 			aria-labelledby='exampleModalLabel'
	// 			aria-hidden='true'
	// 		>
	// 			<div className='modal-dialog' role='document'>
	// 				<div className='modal-content'>
	// 					<div className='modal-header'>
	// 						<h5 className='modal-title' id='exampleModalLabel'>
	// 							Yang's Hand
	// 						</h5>
	// 						<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
	// 							<span aria-hidden='true'>&times;</span>
	// 						</button>
	// 					</div>
	// 					<div className='modal-body container'>
	// 						<Card />
	// 						<Card />
	// 						<Card />
	// 					</div>
	// 					<div className='modal-footer'>
	// 						<button type='button' className='btn btn-secondary' data-dismiss='modal'>
	// 							Close
	// 						</button>
	// 						<button type='button' className='btn btn-primary'>
	// 							Save changes
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
		<div>
			<button type='button' className='btn btn-white' data-toggle='modal' data-target='.bd-example-modal-lg'>
				Hand
			</button>

			<div
				className='modal fade bd-example-modal-lg'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='myLargeModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='container'>
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
