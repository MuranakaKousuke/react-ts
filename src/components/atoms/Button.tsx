import React from 'react';
import styled from 'styled-components';

import { COLOR, FONT_FAMILY } from '../../constants';

// -----------------------------------------------
//
type Props = {
  children: React.ReactNode;
  width?: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  onClick?: () => void;
  disabled?: boolean;
}

// -----------------------------------------------
//
const StyledButton = styled.button<Props>`
  font-family: ${FONT_FAMILY};
  font-size: 1rem;
  font-weight: 600;
  border: 0;
  outline: 0;
  cursor: pointer;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
`

// -----------------------------------------------
//
const Button: React.FC<Props> = ({
  children,
  width,
  borderRadius,
  color = `${COLOR.WHITE}`,
  backgroundColor,
  padding = '1rem',
  onClick,
  disabled
}) => {
  return (
    <StyledButton
      width={width}
      borderRadius={borderRadius}
      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
