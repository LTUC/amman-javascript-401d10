import { render, screen } from '@testing-library/react';
import App from './App';
import People from './components/People';
it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Star Wars People/i);
  expect(linkElement).toBeInTheDocument();
});

it('Should render star wars list', () => {
  const people = [
    { name: 'Luke Skywalker', url: 'http://swapi.dev/api/people/1' },
    { name: 'Darth Vader', url: 'http://swapi.dev/api/people/2' },
  ];
  render(<People people={people} />);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalke');
  expect(items[0]).toContainHTML(
    '<li><a href="http://swapi.dev/api/people/1" target="_blank">Luke Skywalker</a></li>'
  );
  expect(items[1]).toHaveTextContent('Darth Vader');
});
