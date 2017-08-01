import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks';
import './App.css'

export default class BooksApp extends Component {
  state = {
    books: []
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.getBooks())
  }

  getBooks() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          component={SearchPage}
        />
        <Route
          exact path='/'
          render={() => (
            <ListBooks
              books={this.state.books}
              onShelfChange={this.updateBook.bind(this)}
            />
          )}
        />
      </div>
    );
  }
}
