import React from 'react';
import { render } from '@testing-library/react';

class HelloDiv extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>Hello</div>`;
  }
}

customElements.define('hello-div', HelloDiv);

const AnotherComponent = () => (<hello-div />);

test('renders web-component', () => {
  const { getByText } = render(<AnotherComponent />);
  const helloDiv = getByText(/Hello/i);
  expect(helloDiv).toBeInTheDocument();
});
