import React, { Component } from 'react';
import Figure from './figure.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class User extends Component {
  render() {
    return (
      <div className="user">
        <span className="user-name">Jakob Treml</span>
        <FontAwesomeIcon icon="angle-down" className="arrow-icon"/>
        <Figure src={this.props.src} alt={this.props.alt} parentClass="photo"/>
      </div>
    )
  }
}

export default User;
