import React from 'react';
import renderer from 'react-test-renderer';
import Companies from '../__Mocks__/Companies';

describe('Companies', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Companies />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
