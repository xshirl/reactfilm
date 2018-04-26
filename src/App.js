import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import Films from './TMDB';
import FilmRow from './FilmRow';


class App extends Component {
  render() {
    let titles = Films.films.map((data) => {
      let Year = new Date(data.release_date);
      return <FilmRow title={data.title}
      id={data.id}
      path = {data.poster_path}
      year = {Year.getFullYear()}
      />
    });


    return (
      <div className="film-library">
      <FilmListing title={titles} />
      <FilmDetails />
      </div>

    );
  }
}

export default App;
