import React, { Component } from 'react';
import axios from 'axios';
import "./CharacterList.scss"; 

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters(){
    try {
      const charactersData = await axios.get("https://gateway.marvel.com/v1/public/characters", {
        params: {
          apikey: "6a9e903790k74f30d48", // Use your API key here
          limit: 50
        }
      });

      this.setState({ 
        characters: charactersData.data.data.results
      });
    } catch (error) {
      console.log(error.message);
      // Add any error handling logic in here 
    } 
  }

  renderCharacters() {
    const characterList = this.state.characters.map((character, index) => {
      return (<div className="character-card" key={`${character.id}-${index}`}>
        <img alt="" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
        <p>{character.name}</p>
      </div>);
    });
    return (<div className="character-list">{characterList}</div>);
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
