import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Leftbar extends Component {
  constructor(props) {
    super(props);
    this.controller = this.controller.bind(this);
  }

  controller(event) {
    this.props.changeLocation(event.target.innerHTML);
  }

  render() {
    return (
      <div className="bar-left">
        <div className="nav-main">
          <span>MAIN</span>
          <NavLink icon="book" location="all" trigger={this.controller} />
          <NavLink icon="globe" location="quito" trigger={this.controller} />
          <NavLink
            icon="globe"
            location="cartagena"
            trigger={this.controller}
          />
          <NavLink icon="globe" location="medellin" trigger={this.controller} />
          <NavLink
            icon="tablet-alt"
            location="digital"
            trigger={this.controller}
          />
          <NavLink
            icon="user-tag"
            location="Personal Loans"
            trigger={this.controller}
          />
        </div>
      </div>
    );
  }
}

class NavLink extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state= {
  //     selectedLocation: props.location
  //   }
  //   this.consoleLocation = this.consoleLocation.bind(this)
  //   this.changeLocation = this.state.selectedLocation
  // }

  // getLocation() {
  //   console.log(this.state.selectedLocation)
  // }

  render() {
    const { icon, location } = this.props;
    // console.log(this.props.changeLocation)
    return (
      <a href={`#${location}`} className="nav-link">
        <FontAwesomeIcon icon={icon} className="link-icon" />
        <span onClick={this.props.trigger}>{location}</span>
      </a>
    );
  }
}

export default Leftbar;
