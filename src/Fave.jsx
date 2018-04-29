import React, { Component } from 'react';
import TMDB from './TMDB';


export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // isFave: false
    }
  }
  handleClick(e) {
    e.stopPropagation();
    console.log('handling Fave click!');
    // this.setState({
    //   isFave: !this.state.isFave
    // })
    this.props.onFaveToggle();
  }

  render() {
    const isFave = (this.props.isFave) ? 'remove_from_queue':'add_to_queue'
    return (
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}
