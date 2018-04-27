import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </div>
    )
  }
}

export default App
