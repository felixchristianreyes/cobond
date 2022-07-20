import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleMapsComponent from './GoogleMapsComponent';

describe('<GoogleMapsComponent />', () => {
  test('it should mount', () => {
    render(<GoogleMapsComponent />);
    
    const googleMapsComponent = screen.getByTestId('GoogleMapsComponent');

    expect(googleMapsComponent).toBeInTheDocument();
  });
});