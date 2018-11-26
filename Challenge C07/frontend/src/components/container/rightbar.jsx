import React, { Component } from "react";

class Rightbar extends Component {
  render() {
    return (
      <div className="bar-right">
        <div className="most-read">
          <span>MOST READ BOOKS</span>
          <ol>
            <li>Hooked: How to Build Habit-Forming Products</li>
            <li>
              The Inevitable: Understanding the 12 Technological Forces That
              Will Shape Our Future
            </li>
            <li>Lean In: Women, Work, and the Will to Lead</li>
            <li>Building a Business When There Are No Easy Answers</li>
            <li>How Google Works</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Rightbar;
