import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FacesRatings from './FacesRatings';

describe('<FacesRatings />', () => {
  test('it should mount', () => {
    render(<FacesRatings />);
    
    const facesRatings = screen.getByTestId('FacesRatings');

    expect(facesRatings).toBeInTheDocument();
  });
});