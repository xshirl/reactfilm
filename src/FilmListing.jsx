import React, { Component } from 'react';
import Films from './TMDB';

function FilmListing(props) {
    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <h1> {props.title} </h1>
        </div>

    );
}

export default FilmListing;
