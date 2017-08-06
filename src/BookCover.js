import React from 'react';
import PropTypes from 'prop-types';

export default function BookCover(props) {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${props.thumbnail}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: 'center'
      }}
    ></div>
  );
}

BookCover.propTypes = {
  thumbnail: PropTypes.string
};
