import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import { ConfigureStateReducer } from './Categories/categories';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    Categories: ConfigureStateReducer,
  },
});

export default store;
