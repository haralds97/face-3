import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return(
			<nav className="mr3" style={{display: 'flex', justifyContent: 'flex-end' }}>
			<p onClick={() =>onRouteChange('Signout')} className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer" >Signout</p>	
		</nav>
		);
	} else {
		return(
		<nav className="mr3" style={{display: 'flex', justifyContent: 'flex-end' }}>
			<p onClick={() =>onRouteChange('SignIn')} className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer">Sign In</p>
			<p onClick={() =>onRouteChange('Register')} className="nav mr3 pa2 underline dim f3 justify-right pa2 pointer" >Register</p>			
		</nav>
	);	
	}
}

export default Navigation;