import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainNav from './MainNav';

describe('<MainNav />', () => {
  test('it should mount', () => {
    render(<MainNav />);
    
    const mainNav = screen.getByTestId('MainNav');

    expect(mainNav).toBeInTheDocument();
  });
});