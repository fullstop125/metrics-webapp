import React from 'react';
import renderer from 'react-test-renderer'; 
import NavBar from '../__Mocks__/NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
