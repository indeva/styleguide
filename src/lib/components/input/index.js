import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './input.scss';

const Input = ({
  value, onChange, type, lined,
}) => {
  const className = classNames(
    'input',
    {
      'input--lined': lined,
    },
  );

  return <input className={className} onChange={onChange} value={value} type={type} />;
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  lined: PropTypes.bool,
  type: PropTypes.oneOf([
    'password',
    'text',
  ]),
};

Input.defaultProps = {
  lined: false,
  type: 'text',
};

export default Input;
