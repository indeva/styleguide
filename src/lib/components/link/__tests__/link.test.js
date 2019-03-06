import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Link from '..';

describe('Link', () => {
  describe('with url', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test">link with href</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with target', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" target="_blank">link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with custom class', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" className="my classes">my link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('behavior tests', () => {
    describe('when is clicked', () => {
      it('calls the callback function', () => {
        const onClickCallback = jest.fn();
        const wrapper = mount(
          <Link onClick={onClickCallback} url="/test" className="links">my link</Link>,
        );

        wrapper.find('.link').simulate('click');
        expect(onClickCallback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('with modifier', () => {
    describe('primary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" primary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('secondary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" secondary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('tertiary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" tertiary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('small', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" small>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('medium', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" medium>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('large', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" large>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('block', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" block>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('compose by primary and large and block', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" primary large block>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
