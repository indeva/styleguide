import React from 'react';
import renderer from 'react-test-renderer';
import Input from '..';

describe('Input', () => {
  it('renders the input', () => {
    const component = renderer.create(<Input>Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the input as password', () => {
    const component = renderer.create(<Input type="password">Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the input with width', () => {
    const component = renderer.create(<Input width="90%">Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
