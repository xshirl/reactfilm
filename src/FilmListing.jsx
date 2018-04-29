import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.state = {
      filter : 'all'
    }
  }
  handleFilterClick(filter) {
    console.log('Setting filter to ' + filter);
    this.setState({
      filter: filter
    })
  }

  render() {
    const allFilms = this.props.films.map((film) => (
      <FilmRow
      film={film}
      key={film.id}
      onFaveToggle={() => this.props.onFaveToggle(film)}
      isFave = {this.props.faves.includes(film)}
      onDetailsClick = {() => this.props.onDetailsClick(film)}
      />
))
    const faves2 = this.props.faves.map((fave) => (
        <FilmRow
      film={fave}
      key={fave.id}
      onFaveToggle={() => this.props.onFaveToggle(fave)}
      isFave = {this.props.faves.includes(fave)}
      onDetailsClick = {() => this.props.onDetailsClick(fave)}
      />
      ))
    return (
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div onClick = {()=> this.handleFilterClick('all')}
        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick = {()=> this.handleFilterClick('faves')}
        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>
   {(this.state.filter === 'all') ? allFilms:faves2}

</div>
    )
  }
}

