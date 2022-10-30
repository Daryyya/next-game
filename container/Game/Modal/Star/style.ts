import styled from "@emotion/styled";

export const StarWrapper = styled.div<{size: 'big' | 'small'}>`
  position: absolute;
  width: ${({size}) => size === 'big' ? 162 : 107}px;
  height: ${({size}) => size === 'big'? 156 : 103}px;

`