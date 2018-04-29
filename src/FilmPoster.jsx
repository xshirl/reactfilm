import React, { Component } from 'react';
import TMDB from './TMDB';

export default class FilmPoster extends Component {

  render() {
    const posterUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path
    return (
      <img src={posterUrl} alt="" />
    )
  }
}
