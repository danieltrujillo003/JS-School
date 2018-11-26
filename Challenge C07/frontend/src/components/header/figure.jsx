import React, { Component } from 'react';

class Figure extends Component {
  render() {
    return (
      <div className={this.props.parentClass}>
        <img src={this.props.src} alt={this.props.alt} className={this.props.innerClass}/>
      </div>
    )
  }
}

export default Figure;
