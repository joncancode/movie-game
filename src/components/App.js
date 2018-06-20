import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Card from './Card'
import AnswerInput from './AnswerInput';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar title="The Movie Game" />
      <AnswerInput />
      <Card />
      </div>
    );
  }
}

export default App;
