import styled from '@emotion/styled'
import Image from 'next/image'

export const Main = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
`
export const Bg = styled(Image)`
  object-fit: cover;
  object-position: center;
`
