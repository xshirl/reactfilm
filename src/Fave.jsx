import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isFave:false}
  }

  handleClick(e) {
    e.stopPropagation();
    console.log('handling Fave click');
    this.setState((prevState) => {
      return {
      isFave: !prevState.isFave
      }
      });


  }

  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    return (
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className="material-icons">add_to_queue</p>
      </div>)
  }


}

export default Fave;
