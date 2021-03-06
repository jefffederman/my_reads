import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

export default function SearchPage(props) {
  const { searchBooks, searchResults, onShelfChange, shelfNames } = props;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" onInput={searchBooks}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  shelves={shelfNames}
                  onShelfChange={onShelfChange}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  shelfNames: PropTypes.array.isRequired
}
