import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  border-bottom: 2px solid #BBC0CB;
  height: 30px;
  outline: none;
  font-family: Rubik;
  line-height: 21px;
  font-size: 16px;
  width: ${props => props.width || '100%'}
  &:focus {
    border-bottom: 2px solid #F6975D;
  }
`;

export default ({ value, onChange, type }) =>
  <StyledInput onChange={onChange} value={value} type={type} />;
