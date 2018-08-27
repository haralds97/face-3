import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return(
		<div className="center ma2">
			<div className="absolute">
				<img id="inputimage" alt="here-will-be-face" src={imageUrl} width="400px" height="auto"/>
				<div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;