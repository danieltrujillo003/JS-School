import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <h2 id="main-header">New Releases</h2>
        <div className="display-main">
          <a href="#">
            <FontAwesomeIcon icon="th-large" className="left-display" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="th-list" />
          </a>
        </div>
      </div>
    );
  }
}

export default MainHeader;
