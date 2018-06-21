import React, { Component } from 'react';
import './AnswerInput.css';

class AnswerInput extends Component {
  constructor(props){
    super(props);
      this.state = {
        movie: '',
        actor: '',
        entry: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

onChange(e){
  this.setState({entry: e.target.value})
 
}

onSubmit(e){
  e.preventDefault();

  const post = {
    entry: this.state.entry
  }

  fetch('https://api.themoviedb.org/3/movie/550?api_key=2f78d62edc3192cd3de816e74140dc09', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => console.log('data', data))
}

  render() {
    return (
      <div className="AnswerInput">
          
          <h3> Name a movie </h3>
          <input type="text" onChange={this.onChange} value={this.state.entry}/>
            <button onSubmit={this.onSubmit}>Enter</button>
      </div>
    );
  }
}

export default AnswerInput;