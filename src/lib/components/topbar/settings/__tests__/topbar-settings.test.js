import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Settings from '..';

jest.useFakeTimers();

describe('Topbar Settings', () => {
  const defaultProps = {
    name: 'Felino de Santos',
    email: 'felino@teste.com',
    links: [
      { title: 'Editar perfil', icon: ['far', 'pen'], url: 'https://indeva.com.br/' },
      { title: 'Sair', icon: ['far', 'sign-out-alt'], url: 'https://indeva.com.br/beneficios/' },
    ],
    toggleSettings: () => {},
  };

  it('should renders properly', () => {
    const component = renderer.create(<Settings {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without active modifier', () => {
    const component = renderer.create(<Settings {...defaultProps} />);
    component.root.instance.setState({ visible: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onSettingsNavClick when clicking on nav links', () => {
    const onSettingsNavClick = jest.fn();
    const wrapper = shallow(<Settings {...defaultProps} onSettingsNavClick={onSettingsNavClick} />);
    wrapper.find('.topbar-settings__link').first().simulate('click');
    expect(onSettingsNavClick).toHaveBeenCalledWith({ title: 'Editar perfil', icon: ['far', 'pen'], url: 'https://indeva.com.br/' });
  });

  it('should remove class --active when clicking outsite', () => {
    const wrapper = mount(<Settings {...defaultProps} />);
    expect(wrapper.exists('.topbar-settings--active')).toEqual(true);
    wrapper.instance().handleClickOutside({ target: null });
    expect(wrapper.update().exists('.topbar-settings--active')).toEqual(false);
  });

  it('should call toggleSettings when clicking outsite', () => {
    const toggleSettings = jest.fn();
    const wrapper = mount(<Settings {...defaultProps} toggleSettings={toggleSettings} />);
    wrapper.instance().handleClickOutside({ target: null });
    jest.runAllTimers();
    expect(toggleSettings).toHaveBeenCalled();
  });
});
