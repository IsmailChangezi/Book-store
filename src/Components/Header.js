import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>BookStore CMS</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
