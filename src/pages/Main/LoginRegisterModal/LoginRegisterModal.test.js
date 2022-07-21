import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginRegisterModal from './LoginRegisterModal';

describe('<LoginRegisterModal />', () => {
  test('it should mount', () => {
    render(<LoginRegisterModal />);
    
    const loginRegisterModal = screen.getByTestId('LoginRegisterModal');

    expect(loginRegisterModal).toBeInTheDocument();
  });
});