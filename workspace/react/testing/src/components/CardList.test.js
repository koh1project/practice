import { shallow } from 'enzyme'
import React from 'react';
import CardList from './CardList';

it('Expect to render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John',
      username: 'Mike',
      email: 'john@gmail.com',
    }
  ];
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});