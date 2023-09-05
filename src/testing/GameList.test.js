import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GamesList from '../components/GamesList/GamesList';

describe('GamesList Component', () => {
  it('renders game categories', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GamesList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Shooter (0)')).toBeInTheDocument();
  });
});
