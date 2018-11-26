import React, { Component } from 'react';
import SearchBar from './searchBar.jsx'

class MediumHeader extends Component {
  render() {
    return (
      <div className="medium-header">
        <h1>Bookshelf</h1>
        <SearchBar />
      </div>
    )
  }
}

export default MediumHeader;
