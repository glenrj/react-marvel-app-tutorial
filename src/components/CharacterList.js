import React, { Component } from 'react';
import "./CharacterList.scss"; 

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    }
  }

  renderCharacters() {
    return (<div className="character-list">Placeholder for character list</div>);
  }

  renderEmptyState() {
    return (<div>
      <p>Loading characters....</p>
    </div>);
  }

  render() {
  	return (
      <section className="CharacterList__Component">
    		<h2>Characters List</h2>
        {this.state.characters.length ? this.renderCharacters() : this.renderEmptyState()}
    	</section>
    );
  }
};

export default CharacterList;
