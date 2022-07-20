import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarRating from './StarRating';

describe('<StarRating />', () => {
  test('it should mount', () => {
    render(<StarRating />);
    
    const starRating = screen.getByTestId('StarRating');

    expect(starRating).toBeInTheDocument();
  });
});