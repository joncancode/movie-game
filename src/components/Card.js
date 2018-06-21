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
    fetch('https://api.themoviedb.org/3/movie/550?api_key=2f78d62edc3192cd3de816e74140dc09')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      return data
    })
    .then(data => this.setState({
    count: 1,
    movie: data.title,
    movie_overview: data.overview,
    actor: []
  }))
  .then(console.log('state', this.state))
    .catch(error => console.log("there was an error", error))
  }

  render() {
    const {movie, actor, movie_overview} = this.state
    return (
      <div className="Card">
          <h2>{movie}</h2>
            <div className="Card-desc">{movie_overview}</div>
            
      </div>
    );
  }
}

export default Card;