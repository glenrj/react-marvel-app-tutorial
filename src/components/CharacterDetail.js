import React, { Component } from 'react';
import axios from 'axios';
import "./CharacterDetail.scss"; 

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedCharacterId && this.props.selectedCharacterId !== prevProps.selectedCharacterId) {
      this.fetchCharacterDetails();
    }
  }

    async fetchCharacterDetails() {
      try {
        const character = await axios.get(`https://gateway.marvel.com/v1/public/characters/${this.props.selectedCharacterId}`, {
          params: {
            apikey: "c073ec6c21c6e6293fd4ac1e6d01968a"
          }
        });
      console.log(character.data.data.results[0]);
      this.setState({
        selectedCharacter: character.data.data.results[0]
      })
      } catch (error) {
        console.log(error.message);
        // Add any error handling logic in here 
      } 
    }

  renderCharacterDetails() {
      const { selectedCharacter } = this.state;
      const wikiUrl = selectedCharacter.urls.find(url => url.type === "wiki"); 

      return (<div className="character-details">
        <img alt="" src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}/>
        <h4>{selectedCharacter.name}</h4>
        <p>{selectedCharacter.description || "No description found"}</p> 
        { wikiUrl && 
          <a href={wikiUrl.url} target="_blank" rel="noopener noreferrer">Get more info</a>
        }
      </div>);
  }

  renderEmptyState() {
    return (<div><p>Select a character from the list above</p></div>);
  }


  render() {
    return (<section className="CharacterDetail__Component">
        <h2>Character Details</h2>
        {this.state.selectedCharacter ? this.renderCharacterDetails() : this.renderEmptyState()}
      </section>);
  }
};

export default CharacterDetail;