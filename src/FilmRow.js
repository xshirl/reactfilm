import React, { Component } from 'react';
import Films from './TMDB';
import FilmListing from './FilmListing.jsx';
import FilmPoster from './FilmPoster.jsx';

function FilmRow(props) {
  return (
      <div className="film-row">
        <FilmPoster path={props.path} />
        <div className="film-summary">
          <h1> {props.title} </h1>
          <p>{props.year}</p>
        </div>
      </div>
      )
}

export default FilmRow;
