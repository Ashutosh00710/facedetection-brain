import React from 'react';
import './img.css';

const ImageLinkForm = ({ onInputChange , onButtonSubmit }) => {
	return(
		<div className='ma4 mt0'>
			<p className='f5'>
				{'This magic brain will detect faces in your picture . Give it a chance'}
			</p>
			<div className='centre'>
				<div className='centre form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 centre' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f5 link ph3 pv1 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>	
		</div>
	);
}

export default ImageLinkForm;