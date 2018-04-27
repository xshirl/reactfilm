import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter:'all'
    }
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.isActive = this.isActive.bind(this)
  }
  handleFilterClick(filter, e) {
    this.setState((prevState) => {
      return {
        filter:filter
      }
    })
  }

  isActive(filter) {
    return (this.state.filter === filter) ? 'is-active': '';
  }

  render() {
      const allFilms = this.props.films.map( (film, index) => (
          <FilmRow film={film} key={film.id} />
      ))

     return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div className={"film-list-filter " + this.isActive('all')} onClick={() => this.handleFilterClick('all')}>
          ALL
          <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={"film-list-filter " + this.isActive('faves')} onClick={() => this.handleFilterClick('faves')}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

      {allFilms}
    </div>
      )
  }
}

export default FilmListing
