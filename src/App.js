import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }
  handleFaveToggle(film) {
    const faves = this.state.faves.slice(0);
    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`);
    } else{
      faves.push(film);
      console.log(`Adding ${film.title} to faves`)
    }
    this.setState({faves})
  }

  handleDetailsClick(film) {
    console.log('Fetching details for ' + film.title);
    this.setState({
      current: film
    })
  }
  render() {
    return (
     <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle} onDetailsClick = {this.handleDetailsClick} />
        <FilmDetails film={this.state.current} />
</div>
    );
  }
}

export default App;
