import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line
import Book from "../Components/Book";
// eslint-disable-next-line
import Form from "../Components/Form";

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
