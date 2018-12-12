import React from 'react';
import './Header.scss';
import FilterBar from './FilterBar.js'

function Header(props) {
	return (
		<header className="Header__Component">
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <FilterBar onFilterSubmit={props.onFilterSubmit} />
        </header>
		);
};

export default Header;