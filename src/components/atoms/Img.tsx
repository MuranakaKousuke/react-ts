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
const StyledImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height}
`

// -----------------------------------------------
//
const Img = ({
  width,
  height,
  src,
  alt,
}) => {
  return (
    <StyledImg
      width={width}
      height={height}
      src={src}
      alt={alt}
    />
  );
}

export default Img;
