import React from 'react';

const ImageLinkForm = () => {
	return(
		<div>
			<div className="dark-blue f3">
				<p>
					this Magic Brain will show face contours
				</p>
			</div>
			<div className="tc center">
				<div className="tc form center">
					<input className="w-70 f2"type="text"/>
					<button className="w-30 f2 bg-gold link dib grow shadow-5 br2">detect!</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;