import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App__Component">
        <Header
          title="Marvel Comic Explorer"
          message="Search and explore your favourite Marvel characters!"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
