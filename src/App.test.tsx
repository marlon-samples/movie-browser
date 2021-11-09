import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all elements', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn reactx/i);
  //expect(linkElement).toBeInTheDocument();
});
