import React from 'react';
import FilterBar from './FilterBar';
import './Header.scss';

const Header = (props) => {
	return (
		<header className="Header__Component">
			<h1>{props.title}</h1>
			<p>{props.message}</p>
			<FilterBar onFilterSubmit={props.onFilterSubmit} />
		</header>
	);	
};

export default Header;

