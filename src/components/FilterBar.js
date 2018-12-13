import React, { Component } from 'react';
import "./FilterBar.scss";

class FilterBar extends Component {
	render(){
		return (
			<div className="FilterBar__Component">
				<form>
				  <label className="visually-hidden" htmlFor="search">
				    Search Characters:
				  </label>
				  <input 
				  	type="text" 
				  	placeholder="Search characters" 
				  	id="search"
				  />
				  <button type="submit">Submit</button>
				</form>
			</div>
		);
	}
};


export default FilterBar;
