import React, { Component } from 'react';
import Book from './Book';

export default class BookShelf extends Component {
  render() {
    const { shelfTitle, books } = this.props.shelf;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <li key={book.id}><Book book={book} /></li>)}
          </ol>
        </div>
      </div>
    );
  }
}
