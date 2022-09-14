import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calculatrice', () => {
  render(<App />);
  const linkElement = screen.getByText(/calculatrice/i);
  expect(linkElement).toBeInTheDocument();
});
