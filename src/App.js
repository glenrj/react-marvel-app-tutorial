import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFilterSubmit = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery
    });
  }

  render() {
    return (
      <div className="App__Component">
        <Header 
          title="Marvel Comic Explorer"
          message="Search and explore your favourite Marvel characters!"
          onFilterSubmit={this.onFilterSubmit}
        />
        <CharacterList searchQuery={this.state.searchQuery} />
        <Footer />
      </div>
    );
  }
}

export default App;
