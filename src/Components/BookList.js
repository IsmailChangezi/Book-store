import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
export default function BookList({ title, author }) {
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
    </div>
  );
}
BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
