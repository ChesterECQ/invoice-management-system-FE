import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  const homeElement = screen.getByText('home');
  expect(homeElement).toBeInTheDocument();
});
