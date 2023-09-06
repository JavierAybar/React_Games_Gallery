import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarouselImg from '../components/Carousel/Carousel';

test('renders CarouselImg component', () => {
  const { getByTestId } = render(<CarouselImg />);

  const carousel = getByTestId('carousel-item-1');
  expect(carousel).toBeInTheDocument();
});
