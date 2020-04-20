import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the brand label', () => {
  const { getByText } = render(<App />);
  const brandLabel = getByText(/Venturus Sports/i);
  expect(brandLabel).toBeInTheDocument();
});

test('renders the username table header', () => {
  const { getByText } = render(<App />);
  const usernameHeader = getByText(/Username/i);
  expect(usernameHeader).toBeInTheDocument();
});
