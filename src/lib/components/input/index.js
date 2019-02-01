import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../label';
import P from '../p';
import './input.scss';

const Input = ({
  id, label, error, value, onChange, type, lined, disabled,
}) => {
  const inputClassName = classNames(
    'input',
    'form-control',
    {
      'input--lined': lined,
    },
  );

  const groupClassName = classNames(
    'form-group',
    {
      error: error !== '',
    },
  );

  return (
    <div className={groupClassName}>
      <input
        id={id}
        className={inputClassName}
        onChange={onChange}
        value={value}
        type={type}
        disabled={disabled}
        required
      />
      <Label className="form-control-placeholder" htmlFor={id}>
        {label}
      </Label>
      <P className="error-message">
        {error}
      </P>
    </div>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  lined: PropTypes.bool,
  type: PropTypes.oneOf([
    'password',
    'text',
  ]),
};

Input.defaultProps = {
  lined: false,
  disabled: false,
  type: 'text',
  error: '',
};

export default Input;
