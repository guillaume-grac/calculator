import { render, screen } from '@testing-library/react';
import TheTitle from './TheTitle';

test('renders learn react link', () => {
  render(<TheTitle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
