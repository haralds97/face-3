import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<div className="dark-blue f3">
				<p>
					this Magic Brain will show face contours
				</p>
			</div>
			<div className="tc center">
				<div className="tc form center">
					<input className="w-70 f3 "type="text" onChange={onInputChange}/>
					<button className="w-30 f3 bg-light-purple link dib grow shadow-5 br2 pointer" onClick={onButtonSubmit}>detect!</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;