import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const [newTitle, setNewtitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    const title = document.querySelector('#formTitle').value;
    const author = document.querySelector('#formAuthor').value;
    const id = books.length < 1 ? 1 : books[books.length - 1].id + 1;
    dispatch(addBook({ id, title, author }));
    setNewtitle('');
    setNewAuthor('');
  };
  return (
    <div>
      <form action="" onSubmit={addNewBook}>
        <span>Title: </span>
        <input id="formTitle" type="text" name="title" value={newTitle} onChange={(e) => setNewtitle(e.target.value)} />
        <span>Author: </span>
        <input id="formAuthor" type="text" name="author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
