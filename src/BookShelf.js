import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default function BookShelf(props) {
  const { shelfTitle, books } = props.shelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  shelves={props.shelves}
                  onShelfChange={props.onShelfChange}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

// TODO: shapeof for shelf
BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired
}
