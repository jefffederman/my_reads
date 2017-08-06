import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import { titleFromCamel } from './utils';

export default class ListBooks extends Component {

  shelves() {
    return this.props.shelfNames.map((name) => {
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
                  shelves={this.props.shelfNames}
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

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    shelf: PropTypes.string.isRequired
  })).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  shelfNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
