import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
// type Props = {
//   children: React.ReactNode;
//   display: string;
//   fontSize?: string;
//   fontWeight?: string | number;
//   color?: string;
// }

// -----------------------------------------------
//
const StyledText = styled.span`
  font-family: ${FONT_FAMILY};
  display: ${(display) => display};
  font-size: ${(fontSize) => fontSize};
  font-weight: ${(fontWeight) => fontWeight};
  color: ${(color) => color};
`

// -----------------------------------------------
//
const Text = ({
  children,
  display = 'inline',
  fontSize = '1rem',
  fontWeight = 'normal',
  color = `${COLOR.BLACK}`,
}) => {
  return (
    <StyledText
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </StyledText>
  );
}

export default Text;

// -----------------------------------------------
//
const attrsFactory = (type) => {
  switch (type) {
    case 'WARNING':
      return {
        color: COLOR.WARNING,
      };
    case 'INFO':
      return {
        color: COLOR.INFO,
      };
  }
}

export const WarningText = ({ children }) => <Text {...attrsFactory('WARNING')}>{children}</Text>;
export const InfoText = ({ children }) => <Text {...attrsFactory('INFO')}>{children}</Text>;
