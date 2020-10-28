import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   name: string;
//   validates?: {...function};
// }

// -----------------------------------------------
//
const StyledTextarea = styled.textarea`
  font-family: ${FONT_FAMILY};
  font-size: 1rem;
  height: 8rem;
  outline: 0;
  border: none;
  resize: none;
  border-bottom: 1px solid ${COLOR.INFO};
  width: 50%;
  :focus {
    border-bottom: 1px solid ${COLOR.BLUE};
    transition: border-bottom 0.5s;
  }
`

// -----------------------------------------------
//
const Textarea = ({
  register,
  name,
  placeholder,
  validates,
}) => {
  return (
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      ref={register({ validate: { ...validates } })}
    />
  );
}

export default Textarea;
