import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
// eslint-disable-next-line
import categoryReducer from "./categories/categories";

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
