import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Form from './Form';

it('need to run a function on button click', async () => {
  let handler = jest.fn();
  render(<Form prompt="Get Star Wars People" handler={handler} />);
  const button = screen.getByTestId('mybtn');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  await waitFor(() => expect(handler).toHaveBeenCalled());
});
