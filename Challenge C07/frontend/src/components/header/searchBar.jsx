import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form>
          <FontAwesomeIcon icon="search" className="searchicon"/>
          <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Search..."
              />
        </form>
      </div>
    )
  }
}

export default SearchBar;
