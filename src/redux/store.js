import { configureStore } from '@reduxjs/toolkit';
import gamesReducers from './gamesSlice/gamesSlice';

const store = configureStore({
  reducer: {
    games: gamesReducers,
  },
});

export default store;
