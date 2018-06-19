import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar title="The Movie Game" />
      <Card />
      </div>
    );
  }
}

export default App;
