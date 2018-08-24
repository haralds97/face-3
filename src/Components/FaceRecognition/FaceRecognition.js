import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return(
		<div className="center pa2 ma2">
			<div className="absolute mt2">
				<img src={imageUrl} alt="here-a-picture-will-be" width="400px" height="auto"/>
			</div>
		</div>
	);
}

export default FaceRecognition;