import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

const Link = ({
  children,
  url,
  target,
  onClick,
  className,
  primary,
  secondary,
  tertiary,
  small,
  medium,
  large,
  block,
}) => {
  const classes = classNames(
    'link', className,
    {
      'link--primary': primary,
      'link--secondary': secondary,
      'link--tertiary': tertiary,
      'link--small': small,
      'link--medium': medium,
      'link--large': large,
      'link--block': block,
    },
  );

  return (
    <a
      href={url}
      target={target}
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  target: '_self',
  className: null,
  onClick: null,
  primary: false,
  secondary: false,
  tertiary: false,
  small: false,
  medium: false,
  large: false,
  block: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  url: PropTypes.string.isRequired,
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_self',
    '_top',
    'framename',
  ]),
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool,
};

export default Link;
