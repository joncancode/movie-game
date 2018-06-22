import React, { Component } from 'react';
import './AnswerInput.css';

import {connect} from 'react-redux'

class AnswerInput extends Component {
  constructor(props){
    super(props);
      this.state = {
        movie: '',
        actor: '',
        entry: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

onChange(e){
  this.setState({entry: e.target.value})
 
}

handleSubmit(e){
  e.preventDefault();
  console.log('form submit', this.state);

 this.setState({
  entry: '',
})

  console.log('is', this.state.entry)

  // const post = {
  //   entry: this.state.entry
  // }

  // fetch('https://api.themoviedb.org/3/movie/550?api_key=2f78d62edc3192cd3de816e74140dc09', {
  //   method: 'post',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(post)
  // })
  // .then(res => res.json())
  // .then(data => console.log('data', data))
}

  render() {
    return (
      <div className="AnswerInput">
          
          <form onSubmit={e => this.handleSubmit(e)}>
          <h3> Name a movie </h3>
      
            <input
            type="text"
            name="word"
            value={this.state.entry}
            aria-label="enter form"
            onChange={this.onChange}
          />
            <button>Enter</button>
            </form>
      </div>
    );
  }
}

export default connect()(AnswerInput);