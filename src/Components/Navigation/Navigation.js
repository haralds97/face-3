import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
	return(
		<nav style={{ }}>
			<p 
			className=" nav mr3 pa2 underline dim f3 justify-right pa2 pointer"
			onClick={() => onRouteChange("SignIn")}>Signout</p>
		</nav>
	);
}

export default Navigation;