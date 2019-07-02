import React, { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const withForwardedRef = Component => hoistNonReactStatics(
  forwardRef((props, ref) => (
    <Component forwardedRef={ref} {...props} />
  )),
  Component,
);

export default withForwardedRef;
