import React from 'react';
import renderer from 'react-test-renderer';
import DetailsPage from '../__Mocks__/Details';

describe('DetailsPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
