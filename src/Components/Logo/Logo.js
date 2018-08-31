import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import light2 from './light2.png';

const Logo = () => {
	return(
		<div className="ml4">
			<Tilt className="Tilt gradient br3 ml3 " options={{ max : 45 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> 
					<img alt="" src={light2}/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;