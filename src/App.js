import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import PokemonTeam from './components/PokemonTeam'

class App extends Component {
  render() {
    return (
      <div className="App">
          <PokemonTeam /> 
      </div>
    );
  }
}

export default App;
