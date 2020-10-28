import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
type Props = {
  children: React.ReactNode;
  level?: number;
  visualLevel?: number;
  color?: string;
}

// -----------------------------------------------
//
const StyledHeading = styled.h1<Props>`
  font-family: ${FONT_FAMILY};
  margin: 0;
  font-size: ${({ visualLevel, level }) => {
    const fontSize = (typeof visualLevel !== 'undefined') ? visualLevel : level;
    switch (fontSize) {
      case 1:
        return '3.0rem';
      case 2:
        return '2.5rem';
      case 3:
        return '2.0rem';
      case 4:
        return '1.5rem';
      case 5:
        return '1.0rem';
      case 6:
        return '0.5rem';
    }
  }};
  color: ${({ color }) => color};
`

// -----------------------------------------------
//
const Heading: React.FC<Props> = ({
  children,
  level = 1,
  visualLevel,
  color = `${COLOR.BLACK}`,
}) => {
  return (
    <StyledHeading
      as={`h${level}`}
      level={level}
      visualLevel={visualLevel}
      color={color}
    >
      {children}
    </StyledHeading>
  );
}

export default Heading;

// -----------------------------------------------
//
export const FormTitle = ({
  children
}) => {
  return (
    <Heading level={1} visualLevel={4}>{children}</Heading>
  );
}
