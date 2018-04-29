import React, { Component } from 'react';
import TMDB from './TMDB';

export default class FilmDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
    )
  }
}
