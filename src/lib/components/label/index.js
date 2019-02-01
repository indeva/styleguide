import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={className}>{children}</label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: '',
};

export default Label;
