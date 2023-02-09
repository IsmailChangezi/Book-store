import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

export default function Books() {
  const books = useSelector((state) => state.books);
  let id = 0;
  return (
    <div>
      {books.map((book) => {
        id += 1;
        return <Book key={id} id={book.id} title={book.title} author={book.author} />;
      })}
      <AddBook />
    </div>
  );
}
