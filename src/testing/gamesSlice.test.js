import {
  getGames,
  getGameByCategory,
  gameSlice,
} from '../redux/gamesSlice/gamesSlice';

describe('gameSlice', () => {
  it('should handle getGames.fulfilled', () => {
    const initialState = {
      games: [],
      gameByCategory: [],
    };

    const response = [
      {
        id: 540,
        title: 'Overwatch 2',
        thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
        short_description: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
        game_url: 'https://www.freetogame.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
      },
    ];

    const newState = gameSlice.reducer(initialState, getGames.fulfilled(response));

    expect(newState.games).toEqual(response);
  });

  it('should handle getGameByCategory.fulfilled', () => {
    const initialState = {
      games: [],
      gameByCategory: [],
    };

    const response = [
      {
        id: 540,
        title: 'Overwatch 2',
        thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
        short_description: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
        game_url: 'https://www.freetogame.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
      },
    ];

    const newState = gameSlice.reducer(initialState, getGameByCategory.fulfilled(response));

    expect(newState.gameByCategory).toEqual(response);
  });
});
