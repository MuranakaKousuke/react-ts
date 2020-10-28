import styled from 'styled-components';

// -----------------------------------------------
// 直下の要素のpaddingを指定するラッパー
export const Padding = styled.div`
  padding-top: ${({ top }) => top};
  padding-right: ${({ right }) => right};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
`
Padding.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

// -----------------------------------------------
// 直下の要素のmarginを指定するラッパー
export const Margin = styled.div`
  margin-top: ${({ top }) => top};
  margin-right: ${({ right }) => right};
  margin-bottom: ${({ bottom }) => bottom};
  margin-left: ${({ left }) => left};
`
Padding.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

// -----------------------------------------------
// 直下の要素を並列に並べるラッパー
export const FlexWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`
FlexWrapper.defaultProps = {
  display: 'flex',
}

// -----------------------------------------------
// text-alignを指定するラッパー
export const AlignWrapper = styled.div`
  text-align: ${({ textAlign }) => textAlign};
`
AlignWrapper.defaultProps = {
  textAlign: 'start',
}

// -----------------------------------------------
// 子要素のインライン要素を上下中央寄せするラッパー
export const VerticalCenterWrapper = styled.div`
  display: flex;
  align-items: center;
`
