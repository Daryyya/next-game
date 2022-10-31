import styled from "@emotion/styled";
import Image from 'next/image'

export const StarWrapper = styled.div<{size: 'big' | 'small'}>`
  position: absolute;
  width: ${({size}) => size === 'big' ? 162 : 107}px;
  height: ${({size}) => size === 'big'? 156 : 103}px;
`

export const DesktopImage = styled(Image)`
  @media (max-width: 768px) {
    display: none;
  }
`
export const MobileImage = styled(Image)`
  left: 50%;

  @media (min-width: 768px) {
    display: none;
  }
`