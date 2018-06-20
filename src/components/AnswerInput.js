import React, { Component } from 'react';
import './AnswerInput.css';

class AnswerInput extends Component {


    //movie credits https://api.themoviedb.org/3/movie/550/credits?api_key=2f78d62edc3192cd3de816e74140dc09
    // cast > name 

    //actor credits https://api.themoviedb.org/3/person/73457/movie_credits?api_key=2f78d62edc3192cd3de816e74140dc09
    // cast > original_title or title

  render() {
    return (
      <div className="AnswerInput">
          
          <h3> Name a movie </h3>
          <input/>
            
      </div>
    );
  }
}

export default AnswerInput;