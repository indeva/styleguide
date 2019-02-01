import React from 'react';
import PropTypes from 'prop-types';

const P = ({ children, className }) => (
  <p className={className}>{children}</p>
);

P.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

P.defaultProps = {
  className: '',
};

export default P;
