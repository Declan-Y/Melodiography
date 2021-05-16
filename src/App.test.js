import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

it("renders without crashing", () => {
  render(<App/>)
})

test('types inside input', () => {
  document.body.innerHTML = `<input/>`

  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})
