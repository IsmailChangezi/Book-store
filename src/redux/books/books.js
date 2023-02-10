const ADD_BOOK = "bookstore/books/ADD_BOOK";
const REMOVE_BOOK = "bookstore/books/REMOVE_BOOK";

const defaultState = [
  {
    id: 0,
    title: "The Hunger Games",
    author: "Sauzanne Collins",
  },
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
  },
];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.newBook];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    newBook,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
