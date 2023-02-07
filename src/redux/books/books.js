const ADD_BOOK = 'add-book';
const REMOVE_BOOK = 'remove-book';
const defaultState = [];

const BooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {};
    case REMOVE_BOOK:
      return {};
    default:
      return state;
  }
};

export default BooksReducer;

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
