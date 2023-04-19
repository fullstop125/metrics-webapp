import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../__Mocks__/NavBar';

it('renders correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
