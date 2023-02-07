import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class BookForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add Book Title"
          />
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Add Book Author"
          />
          <button type="button">Add Book</button>
        </form>
      </div>
    );
  }
}
