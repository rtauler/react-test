import React from 'react';

function Header(){
	const firstName = "Roman";
	const lastName = "Tauler";
	return(
	<div>
		<header className="navbar">HELLO {`${firstName} ${lastName}`}!</header>
	</div>
	);
}

export default Header;