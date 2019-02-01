import React from 'react';
import renderer from 'react-test-renderer';
import Label from '..';

describe('Label', () => {
  it('renders the label', () => {
    const component = renderer.create(<Label htmlFor="Test">Test</Label>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
