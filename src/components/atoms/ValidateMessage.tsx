import React from 'react';
import styled from 'styled-components';

import { WarningText } from './Text';

// -----------------------------------------------
//
// type Props = {
//   errors: {errors};
//   name: string;
// }

// -----------------------------------------------
//
const ValidateWrapper = styled.div`
  height: 2rem;
`

// -----------------------------------------------
//
const ValidateMessage = ({
  errors,
  name,
}) => {
  return (
    <ValidateWrapper>
      <WarningText>{errors[`${name}`] && errors[`${name}`].message}</WarningText>
    </ValidateWrapper>
  );
}

export default ValidateMessage;
