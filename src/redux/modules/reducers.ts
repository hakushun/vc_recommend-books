import { combineReducers } from 'redux';
import user from './user';
import book from './book';
import books from './books';
import comment from './comment';
import searchResult from './searchResult';
import searchResults from './searchResults';
import modal from './modal';
import search from './search';

const rootReducer = combineReducers({
  resources: combineReducers({ user, book, books, comment, searchResults }),
  ui: combineReducers({ searchResult, modal, search }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
