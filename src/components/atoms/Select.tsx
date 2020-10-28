import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   name: string;
//   options: {...{key: string | number, value: number | string}}
//   validates?: {...function};
// }

// -----------------------------------------------
//
const StyledSelect = styled.select`
  font-family: ${FONT_FAMILY};
  font-size: 1rem;
  height: 1.5rem;
  width: 25%;
  outline: 0;
  border: none;
  resize: none;
  border-bottom: 1px solid ${COLOR.INFO};
  :focus {
    border-bottom: 1px solid ${COLOR.BLUE};
    transition: border-bottom 0.5s;
  }
`

// -----------------------------------------------
//
const Select = ({
  register,
  name,
  options,
  validates,
}) => {
  return (
    <StyledSelect
      name={name}
      ref={register({ validate: { ...validates } })}
    >
      {options.map(option => {
        return (
          <option
            key={option.key}
            value={option.formValue}
          >
            {option.value}
          </option>);
      })}
    </StyledSelect>
  );
}

export default Select;
