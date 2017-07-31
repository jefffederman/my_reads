import React from 'react';
import { titleFromCamel } from './utils';

export default function BookShelfChanger(props) {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>Move to...</option>
        {props.shelves.map((shelf) => {
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
