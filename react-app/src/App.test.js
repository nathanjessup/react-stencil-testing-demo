import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { defineCustomElements } from 'stencil-app/dist/custom-elements';

defineCustomElements();

describe('app', () => {
  it('should render web component',async () => {

    render(<App />);
    expect(await screen.findByText(/Hello/i)).toBeInTheDocument();
  })
});
