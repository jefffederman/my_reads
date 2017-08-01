import React, { Component } from 'react';
import { titleFromCamel } from './utils';

export default class BookShelfChanger extends Component {

  handleChange = (e) => {
    e.preventDefault();
    const shelf = e.target.value;
    this.props.onShelfChange(this.props.book, shelf);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.handleChange}
          defaultValue={this.props.book.shelf}
        >
          <option value="none" disabled>Move to...</option>
          {this.props.shelves.map((shelf) => {
            return (
              <option value={shelf} key={shelf}>
                {titleFromCamel(shelf)}
              </option>
            );
          })}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

// PropTypes
// shelves
