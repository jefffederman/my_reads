import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import { titleFromCamel } from './utils';

export default class ListBooks extends Component {

  shelfNames() {
    return this.props.books.reduce((shelves, book) => {
      if (!shelves.includes(book.shelf)) {
        shelves.push(book.shelf)
      }
      return shelves;
    }, []);
  }

  shelves() {
    return this.shelfNames().map((name) => {
      const books = this.props.books.filter(book => book.shelf === name);
      return {
        shelfTitle: titleFromCamel(name),
        books: books
      }
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves().map((shelf) => {
              return (
                <BookShelf
                  shelf={shelf}
                  key={shelf.shelfTitle}
                  shelves={this.shelfNames()}
                  onShelfChange={this.props.onShelfChange}
                />
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

// PropTypes
// books
