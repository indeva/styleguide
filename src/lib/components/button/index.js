/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withForwardedRef from '../withForwardedRef';

import './button.scss';

const Button = ({
  forwardedRef,
  children,
  className,
  type,
  primary,
  secondary,
  tertiary,
  medium,
  large,
  block,
  disabled,
  onClick,
}) => {
  const classes = classNames(
    'button', className,
    {
      'button--primary': primary,
      'button--secondary': secondary,
      'button--tertiary': tertiary,
      'button--medium': medium,
      'button--large': large,
      'button--block': block,
    },
  );

  return (
    <button
      ref={forwardedRef}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  forwardedRef: undefined,
  type: 'button',
  className: null,
  primary: false,
  secondary: false,
  tertiary: false,
  medium: false,
  large: false,
  block: false,
  disabled: false,
  onClick: undefined,
};

Button.propTypes = {
  forwardedRef: PropTypes.shape({
    current: PropTypes.any,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withForwardedRef(Button);
