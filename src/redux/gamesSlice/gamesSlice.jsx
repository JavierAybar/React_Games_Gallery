import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGames = createAsyncThunk('games/getGames', async () => {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': '68e6140700msh97fd7a6c3e95ef9p114008jsn6a7b81e6f7ef',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const getGameByCategory = createAsyncThunk('games/getGameByCategory', async (genre) => {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
      category: genre,
    },
    headers: {
      'X-RapidAPI-Key': '68e6140700msh97fd7a6c3e95ef9p114008jsn6a7b81e6f7ef',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error(error);
  }
});

const initialState = {
  games: [],
  gameByCategory: [],
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    clearGameByCategory: (state) => ({
      ...state,
      gameByCategory: [],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.fulfilled, (state, action) => ({
      ...state,
      games: action.payload,
    }));
    builder.addCase(getGameByCategory.fulfilled, (state, action) => ({
      ...state,
      gameByCategory: action.payload,
    }));
  },
});

export const { clearGameByCategory } = gameSlice.actions;

export default gameSlice.reducer;
