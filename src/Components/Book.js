/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

export default function Book(props) {
  const { id, title, author } = props;

  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => deleteBook(id)}>
        Remove
      </button>
    </div>
  );
}
