import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFilterSubmit = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
      selectedCharacterId: null
    });
  }

  onSelectedCharacterChange = (charId) => {
    this.setState({
      selectedCharacterId: charId
    })
  }

  render() {
    return (
      <div className="App__Component">
        <Header 
          title="Marvel Comic Explorer"
          message="Search and explore your favourite Marvel characters!"
          onFilterSubmit={this.onFilterSubmit}
        />
        <CharacterList 
          searchQuery={this.state.searchQuery}
          onSelectedCharacterChange={this.onSelectedCharacterChange}
        />
        <CharacterDetail 
          selectedCharacterId={this.state.selectedCharacterId}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
