import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
export default class FilmRow extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div onClick={() => this.props.onDetailsClick(this.props.film)} className="film-row">
         <FilmPoster film={this.props.film} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
          <Fave onFaveToggle={() => this.props.onFaveToggle(this.props.film)}
                isFave={this.props.isFave}/>
        </div>
      </div>
    )
  }
}

