import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Newsletter from './Newsletter';

describe('<Newsletter />', () => {
  test('it should mount', () => {
    render(<Newsletter />);
    
    const newsletter = screen.getByTestId('Newsletter');

    expect(newsletter).toBeInTheDocument();
  });
});