import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.jsx";
import Container from "./components/container/container.jsx";
import logo from "./img/logo.png";
import userPhoto from "./img/jakob.png";
import "./style/sass/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faGlobe,
  faTabletAlt,
  faUserTag,
  faThLarge,
  faThList,
  faBook,
  faBookOpen,
  faStar
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faAngleDown,
  faGlobe,
  faTabletAlt,
  faUserTag,
  faThLarge,
  faThList,
  faBook,
  faBookOpen,
  faStar
);

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo} userPhoto={userPhoto} />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
