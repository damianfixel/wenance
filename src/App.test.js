import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi! im Wenance Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
