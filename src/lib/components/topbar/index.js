import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../../icons';
import Settings from './settings';
import './topbar.scss';

class Topbar extends Component {
  state = {
    settingsActive: false,
  };

  toggleSettings = () => {
    const { settingsActive } = this.state;
    this.setState({ settingsActive: !settingsActive });
  }

  render() {
    const {
      avatarURL,
      name,
      email,
      links,
      onFilterClick,
      showFilterButton,
      children,
    } = this.props;

    const { settingsActive } = this.state;

    return (
      <div className="topbar">
        <div>
          {children}
        </div>

        <div className="topbar__options">
          {
            showFilterButton && (
              <Button secondary onClick={onFilterClick}>
                <Icon icon={['far', 'filter']} />
                Filtros
              </Button>
            )
          }
          <div className="topbar__user-settings">
            <span
              className="topbar__user-settings-link"
              onClick={this.toggleSettings}
              role="presentation"
            >
              <img
                alt={name}
                src={avatarURL}
                className="topbar__user-avatar"
              />

              <span className="topbar__user-name left-8">
                {name}
                <Icon
                  icon={['far', 'chevron-down']}
                  className="left-16"
                  size="xs"
                  inverse
                />
              </span>

            </span>
            {
              settingsActive ? (
                <Settings
                  name={name}
                  email={email}
                  links={links}
                  active={settingsActive}
                  toggleSettings={this.toggleSettings}
                />
              ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  onFilterClick: PropTypes.func,
  showFilterButton: PropTypes.bool,
  children: PropTypes.node,
};

Topbar.defaultProps = {
  showFilterButton: true,
  onFilterClick: null,
  children: null,
};

export default Topbar;
