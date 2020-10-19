import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MyComponent from 'stencil-app/dist/custom-elements';

customElements.define('my-component', MyComponent);

test('renders web-component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
