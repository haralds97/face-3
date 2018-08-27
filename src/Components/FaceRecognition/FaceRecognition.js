import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
	return(
		<div className="center pa2 ma2">
			<div className="absolute mb2">
				<img alt="here-will-be-face" src={imageUrl} width="400px" height="auto"/>
			</div>
		</div>
	);
}

export default FaceRecognition;