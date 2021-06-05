import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Button from "./components/Button"

it("renders without crashing", () => {
  render(<App/>)
})

test('types inside input', () => {
  render(<App/>)

  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})

test('calls onClick when clicked', () => {
  const handleClickMock = jest.fn()
  render(<Button handleClick={handleClickMock} name="Save drawing"/>)
  
  
  fireEvent.click(screen.getByText(/Save drawing/i))
  expect(handleClickMock).toHaveBeenCalledTimes(1)
})
