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

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
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
            />
          )}
        />
      </div>
    );
  }
}
