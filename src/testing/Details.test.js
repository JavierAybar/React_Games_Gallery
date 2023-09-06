import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../pages/Details';

jest.mock('../redux/gamesSlice/gamesSlice', () => ({
  getGameByCategory: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Details Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      games: {
        gameByCategory: [
          {
            id: 1,
            title: 'Test Game 1',
            thumbnail: 'test-thumbnail-1.jpg',
            short_description: 'This is a test game.',
            game_url: 'https://example.com/game1',
            genre: 'Test Genre',
            platform: 'PC',
            developer: 'Test Developer',
            release_date: '2023-01-01',
          },
          {
            id: 2,
            title: 'Test Game 2',
            thumbnail: 'test-thumbnail-2.jpg',
            short_description: 'Another test game.',
            game_url: 'https://example.com/game2',
            genre: 'Test Genre',
            platform: 'PC',
            developer: 'Test Developer',
            release_date: '2023-02-01',
          },
        ],
      },
    });
  });

  it('renders game details', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );

    const gameTitleElement = screen.getByText('Test Game 1');
    expect(gameTitleElement).toBeInTheDocument();
  });
});
