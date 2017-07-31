import React, { Component } from 'react';
import BookShelf from './BookShelf';

export default class ListBooks extends Component {

  shelves() {
    const shelfNames = this.props.books.reduce((shelves, book) => {
      if (!shelves.includes(book.shelf)) {
        shelves.push(book.shelf)
      }
      return shelves;
    }, []);

    const byShelfNames = shelfNames.map((name) => {
      const books = this.props.books.filter(book => book.shelf === name);
      let shelfTitle = name.replace(/([A-Z])/g, " $1");
      shelfTitle = shelfTitle[0].toUpperCase() + shelfTitle.slice(1);
      return {
        shelfTitle: shelfTitle,
        books: books
      }
    });

    return byShelfNames;
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves().map((shelf) => <BookShelf shelf={shelf} key={shelf.shelfTitle} />)}
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes
// books
