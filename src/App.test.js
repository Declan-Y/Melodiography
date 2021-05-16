import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

it("renders without crashing", () => {
  render(<App/>)
})

test('types inside input', () => {

  userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})

test('calls onClick prop when clicked', async () => {
  const handleClick = jest.fn()
  render(<App/>)
  await fireEvent.click(screen.getByText)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
