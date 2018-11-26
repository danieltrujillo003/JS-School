import React, { Component } from "react";
import MainHeader from "./mainHeader.jsx";
import Book from "./book.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      url: "http://localhost:3000/books"

    };
    this.infoFetch = this.infoFetch.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }
  infoFetch() {
    const url = this.state.url;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookList: data.books
        });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.infoFetch();
  }

  updateUrl() {
    this.setState({
      url: this.props.url
    })
    console.log(this.state.url)
  }

  componentDidUpdate(){
    if(this.state.url != this.props.url){
        this.setState({
            url: this.props.url
        })   
        this.infoFetch();
    }  
}

  render() {
    const { bookList } = this.state;
    
    return (
      <div className="main-content" onClick={this.updateUrl}>
        <MainHeader />
        <div className="books">
          {bookList.map(book => (
            <Book
              key={book.isbn}
              cover={book.cover}
              title={book.title}
              author={book.author}
              summary={book.summary}
              pages={book.pages}
              year={book.year}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
