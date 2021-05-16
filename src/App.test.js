import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

it("renders without crashing", () => {
  render(<App/>)
})

test('types inside input', () => {
  render(<App/>)

  userEvent.type(screen.getBy('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})

test('calls onClick prop when clicked', async () => {
  const handleClick = jest.fn()
  render(<App/>)
  await fireEvent.click(screen.getByText(/Save drawing/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
