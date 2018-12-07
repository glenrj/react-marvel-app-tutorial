import React from 'react';
import './Header.scss';

function Header(props) {
	return (
		<header>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
        </header>
		);
};

export default Header;