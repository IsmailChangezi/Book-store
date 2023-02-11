import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable //
import Book from '../components/Book';
import Form from '../components/Form';
// eslint-enable //
const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
