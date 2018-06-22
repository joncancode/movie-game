import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Card from './Card'
import AnswerInput from './AnswerInput';
import {connect} from 'react-redux'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer() {
  return {
    entry: 'original'
  };
}

const store = createStore(reducer);
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


const mapStateToProps = (state) => ({
  movie: state.movie,                       
  actor: state.actor,
  entry: state.entry
})

export default connect(mapStateToProps)(App);
