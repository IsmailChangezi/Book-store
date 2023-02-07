import React, { Component } from 'react';
import Header from './Header';
// eslint-disable-next-line react/prefer-stateless-function
export default class Categories extends Component {
  render() {
    return (
      <main>
        <Header />
        <button type="button">Check Status</button>
      </main>
    );
  }
}
