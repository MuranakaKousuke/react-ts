import React from 'react';
import styled from 'styled-components';

import { FONT_FAMILY } from '../../constants';


import { WarningText } from './Text';

// -----------------------------------------------
//
type Props = {
  children: string;
  required?: boolean;
}

// -----------------------------------------------
//
const StyledFormLabel = styled.label`
  font-family: ${FONT_FAMILY};
  display: block;
`

// -----------------------------------------------
//
const FormLabel: React.FC<Props> = ({
  children,
  required
}) => {
  return (
    <StyledFormLabel>
      {children} {required ? <WarningText>※</WarningText> : ''}
    </StyledFormLabel>
  );
}

export default FormLabel;
