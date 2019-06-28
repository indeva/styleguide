import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../icons';
import './settings.scss';

class Settings extends Component {
  state = {
    visible: true,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  hide = () => {
    this.setState({ visible: false });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { toggleSettings } = this.props;
      this.hide();
      setTimeout(toggleSettings, 1000);
    }
  }

  handleNavClick = navData => () => {
    const { onSettingsNavClick } = this.props;
    return onSettingsNavClick(navData);
  }

  render() {
    const {
      name,
      email,
      links,
    } = this.props;

    const { visible } = this.state;

    const className = classNames(
      'topbar-settings',
      {
        'topbar-settings--active': visible,
      },
    );

    return (
      <div ref={this.setWrapperRef} className={className}>
        <header className="topbar-settings__header">
          { name }
          <span>{ email }</span>
        </header>

        <nav className="topbar-settings__nav">
          {
            links.map(link => (
              <a
                href={link.url}
                className="topbar-settings__link"
                key={link.url}
                onClick={this.handleNavClick(link)}
              >
                <Icon icon={link.icon} />
                { link.title }
              </a>
            ))
          }
        </nav>
      </div>
    );
  }
}

Settings.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  toggleSettings: PropTypes.func.isRequired,
  onSettingsNavClick: PropTypes.func,
};

Settings.defaultProps = {
  onSettingsNavClick: () => {},
};

export default Settings;
