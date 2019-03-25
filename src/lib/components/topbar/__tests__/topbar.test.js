import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Topbar from '..';

describe('Topbar', () => {
  const defaultProps = {
    avatarURL: 'https://placekitten.com/32/32',
    name: 'Felino da Silva',
    role: 'Gerente',
    links: [
      { title: 'Editar perfil', icon: ['far', 'pen'], url: '#1' },
      { title: 'Sair', icon: ['far', 'sign-out-alt'], url: '#2' },
    ],
  };

  it('should renders properly', () => {
    const component = renderer.create(<Topbar {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when state settingsActive is falsy (by default)', () => {
    it('should not include Settings', () => {
      const wrapper = mount(<Topbar {...defaultProps} />);
      expect(wrapper.exists('.topbar-settings')).toBeFalsy();
    });
  });

  describe('when state settingsActive is truthly', () => {
    it('should include Settings', () => {
      const wrapper = mount(<Topbar {...defaultProps} />);
      wrapper.setState({ settingsActive: true });
      expect(wrapper.exists('.topbar-settings')).toBeTruthy();
    });
  });

  describe('.toggleSettings', () => {
    describe('when state settingsActive is falsy', () => {
      it('should change state to true', () => {
        const wrapper = mount(<Topbar {...defaultProps} />);
        wrapper.instance().toggleSettings();
        expect(wrapper.state('settingsActive')).toBeTruthy();
      });
    });

    describe('when state settingsActive is truthly', () => {
      it('should change state to false', () => {
        const wrapper = mount(<Topbar {...defaultProps} />);
        wrapper.setState({ settingsActive: true });
        wrapper.instance().toggleSettings();
        expect(wrapper.state('settingsActive')).toBeFalsy();
      });
    });
  });
});