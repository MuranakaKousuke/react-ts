import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------
//
// type Props = {
//    width: number;
//    height: number
//    src: string;
//    alt: string;
// }

// -----------------------------------------------
//
const StyledIcon = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height}
`

// -----------------------------------------------
//
const Icon = ({
  width,
  height,
  src,
  alt,
}) => {
  return (
    <StyledIcon
      width={width}
      height={height}
      src={src}
      alt={alt}
    />
  );
}

export default Icon;
