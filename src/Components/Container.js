import React, { Component } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Header from './Header';
// eslint-disable-next-line react/prefer-stateless-function
export default class Container extends Component {
  render() {
    return (
      <main>
        <Header />
        <BookList title="Hello" author="World" />
        <BookForm />
      </main>
    );
  }
}
