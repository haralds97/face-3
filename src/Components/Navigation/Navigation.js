import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return(
			<nav className="mr3" style={{display: 'flex', justifyContent: 'flex-end' }}>
			<p className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer" onClick={() =>onRouteChange('Signout')}>Signout</p>	
		</nav>
		)
	} 

	return(
		<nav className="mr3" style={{display: 'flex', justifyContent: 'flex-end' }}>
			<p className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer" onClick={() =>onRouteChange('home')}>Sign In</p>
			<p className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer" onClick={() =>onRouteChange('home')}>Register</p>			
		</nav>
	);	
}

export default Navigation;