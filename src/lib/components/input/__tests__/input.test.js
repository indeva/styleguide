import React from 'react';
import renderer from 'react-test-renderer';
import Input from '..';

describe('Input', () => {
  it('renders the input', () => {
    const component = renderer.create(<Input label="Test" value="" onChange={() => {}}>Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the lined input', () => {
    const component = renderer.create(<Input label="Test" value="" onChange={() => {}} lined>Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the input as password', () => {
    const component = renderer.create(<Input label="Test" value="" onChange={() => {}} type="password">Test</Input>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
