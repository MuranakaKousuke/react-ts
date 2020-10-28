import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   name: string;
//   type?: string;
//   placeholder: string;
//   validates?: {...function};
// }

// -----------------------------------------------
//
const StyledInput = styled.input`
  font-family: ${FONT_FAMILY};
  font-size: 1rem;
  height: 1.5rem;
  outline: 0;
  border: none;
  border-bottom: 1px solid ${COLOR.INFO};
  width: 50%;
  :focus {
    border-bottom: 1px solid ${COLOR.BLUE};
    transition: border-bottom 0.5s;
  }
`

// -----------------------------------------------
//
const Input = ({
  register,
  name,
  type = 'text',
  placeholder,
  validates,
}) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      ref={register({ validate: { ...validates } })}
    />
  );
}

export default Input;
