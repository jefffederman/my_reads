import React, { Component } from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

export default class Book extends Component {
  render() {
    const { imageLinks, title, authors } = this.props.book;
    const { thumbnail } = imageLinks;
    return (
      <div className="book">
        <div className="book-top">
        <BookCover thumbnail={thumbnail} />
        <BookShelfChanger shelves={this.props.shelves} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}
