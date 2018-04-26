import React, { Component } from 'react';

function FilmPoster (props) {
  return (
    <img src={"https://image.tmdb.org/t/p/w780/" + props.path} alt="" />
    );
}

export default FilmPoster;
