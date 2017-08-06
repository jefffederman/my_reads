import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

export default function Book(props) {
  const { book } = props;
  const { imageLinks, title, authors} = book;
  let thumbnail, authorString;
  if (imageLinks) thumbnail = imageLinks.thumbnail;
  if (authors) authorString = authors.join(', ');
  return (
    <div className="book">
      <div className="book-top">
      <BookCover thumbnail={thumbnail} />
      <BookShelfChanger
        shelves={props.shelves}
        book={book}
        onShelfChange={props.onShelfChange}
      />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authorString}</div>
    </div>
  );
}

// PropTypes
// book, shelves
