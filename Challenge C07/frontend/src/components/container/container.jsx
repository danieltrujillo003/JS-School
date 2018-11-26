import React, { Component } from "react";
import Leftbar from "./leftbar.jsx";
import Rightbar from "./rightbar.jsx";
import Main from "./main/main.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:3000/books"
    }
    this.onChangeLocation = this.onChangeLocation.bind(this)
  }

  onChangeLocation(newLocation) {
    this.setState({
      url: `http://localhost:3000/books?location=${newLocation}`
    })
  }

  render() {
    return (
      <div className="container">
        <Leftbar changeLocation={this.onChangeLocation}/>
        <Main url={this.state.url}/>
        <Rightbar />
      </div>
    );
  }
}

export default Container;
