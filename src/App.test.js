import { render, screen } from '@testing-library/react';
import App from './App';

it("renders without crashing", () => {
  render(<App/>)
})

test('types inside input', () => {
  document.body.innerHTML = `<input/>`

  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  fireEvent.click(screen.getByText("Save"))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
