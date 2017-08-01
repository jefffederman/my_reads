import React from 'react';

export default function BookCover(props) {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${props.thumbnail}")`
      }}
    ></div>
  );
}

// PropTypes
// thumbnail
