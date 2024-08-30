import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //find a text Little Lemon Restaurant and 
  //store it if not found it will return null
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});
