import React from 'react';
import renderer from 'react-test-renderer';
import P from '..';

describe('P', () => {
  it('renders the p', () => {
    const component = renderer.create(<P htmlFor="Test">Test</P>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
