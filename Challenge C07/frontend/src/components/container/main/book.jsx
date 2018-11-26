import React, { Component } from "react";
import Figure from "../../header/figure.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Book extends Component {
  render() {
    const { cover, title, author, summary, pages, year } = this.props;
    return (
      <div className="book-article">
        <Figure
          innerClass="book-cover"
          src={cover}
          alt={`${title} book cover`}
        />
        <h3 className="article-title">{title}</h3>
        <span className="article-author">{author}</span>
        <Rating parentClass="rating" innerClass="article-icon" />
        <div className="popup">
          <div className="cover-hover">
            <div className="circle">
              <FontAwesomeIcon icon="book-open" className="article-icon" />
            </div>
            <div className="rate-book">
              <span className="rate-sentence">RATE THIS BOOK</span>
              <Rating parentClass="rate-hover" innerClass="hover-icon" />
            </div>
          </div>
          <div className="description">
            <span className="hover-year">{year}</span>
            <h3 className="hover-title">{title}</h3>
            <span className="hover-novel-by">Novel by {author}</span>
            <span className="hover-pages">{pages} pages</span>
            <h4 className="hover-summary">SUMMARY</h4>
            <p className="hover-p">{summary}</p>
            <button className="hover-button">Borrow</button>
          </div>
        </div>
      </div>
    );
  }
}

class Rating extends Component {
  render() {
    return (
      <div className={this.props.parentClass}>
        <FontAwesomeIcon icon="star" className={this.props.innerClass} />
        <FontAwesomeIcon icon="star" className={this.props.innerClass} />
        <FontAwesomeIcon icon="star" className={this.props.innerClass} />
        <FontAwesomeIcon icon="star" className={this.props.innerClass} />
        <FontAwesomeIcon icon="star" className={this.props.innerClass} />
      </div>
    );
  }
}

export default Book;
