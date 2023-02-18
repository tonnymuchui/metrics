import { configureStore } from '@reduxjs/toolkit';
import ListsReducer from './List/List';
import DetailsReducer from './Details/Details';

const store = configureStore({
  reducer: {
    ListsReducer,
    DetailsReducer,
  },
});

export default store;
