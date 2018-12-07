import React from 'react';
import './Header.scss';
import FilterBar from './FilterBar.js'

function Header(props) {
	return (
		<header>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <FilterBar />
        </header>
		);
};

export default Header;