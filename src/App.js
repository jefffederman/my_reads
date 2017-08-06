import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks';
import './App.css'

export default class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
  }

  shelfNames() {
    return this.state.books.reduce((shelves, book) => {
      if (!shelves.includes(book.shelf)) {
        shelves.push(book.shelf)
      }
      return shelves;
    }, []);
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.getBooks())
  }

  getBooks() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  setShelves(searchResults) {
    const booksData = this.state.books.map(book => (
      { id: book.id, shelf: book.shelf }
    ));
    searchResults.forEach((book) => {
      const match = booksData.filter(data => data.id === book.id)[0]
      if (match) {
        book.shelf = match.shelf;
      }
    });
    return searchResults;
  }

  searchBooks(e) {
    e.preventDefault();
    if (e.target.value.length) {
      BooksAPI.search(e.target.value, 20).then((results) => {
        if (results && !results.error) {
          const searchResults = this.setShelves(results);
          this.setState({ searchResults });
        }
      }).catch((error) => console.log(error));
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <SearchPage
              searchBooks={this.searchBooks.bind(this)}
              searchResults={this.state.searchResults}
              onShelfChange={this.updateBook.bind(this)}
              shelfNames={this.shelfNames()}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <ListBooks
              books={this.state.books}
              onShelfChange={this.updateBook.bind(this)}
              shelfNames={this.shelfNames()}
            />
          )}
        />
      </div>
    );
  }
}
