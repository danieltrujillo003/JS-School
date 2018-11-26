import React, { Component } from 'react';
import Figure from './figure.jsx'
import MediumHeader from './mediumHeader.jsx';
import User from './user.jsx';

class Header extends Component {
  render() {
    return (
      <div className="topnav">
        <Figure src={this.props.logo} alt="Jobsity logo" parentClass="logo" innerClass="logo-1"/>
        <MediumHeader />
        <User src={this.props.userPhoto} alt="User photo"/>
      </div>
    )
  }
}

export default Header;
