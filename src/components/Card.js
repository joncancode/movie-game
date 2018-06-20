import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
        movie: 'Coco',
        actor: []
    }
}

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://api.themoviedb.org/3/movie/550/credits?api_key=2f78d62edc3192cd3de816e74140dc09')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      return myJson.cast[0].name
    })
    .then(json => this.setState({
    movie: json,
    actor: []
  }))
  .then(console.log('state', this.state))
    .catch(error => console.log("there was an error", error))
  }

  render() {
    const {movie, actor} = this.state
    return (
      <div className="Card">
          <h2>{movie}</h2>
          <h1 className="Card-title">card title</h1>
            <img src="https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg" 
            alt="img" />
            <div className="Card-desc">description</div>
            
      </div>
    );
  }
}

export default Card;