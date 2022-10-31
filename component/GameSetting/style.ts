import styled from '@emotion/styled'
import Button from '../../kit/Button';

export const Wrapper = styled.div`
  background: linear-gradient(#7F75F0, #101F32);
  border-radius: 40px;
  max-width: 699px;
  width: 100%;
  /* min-height: 660px; */
  height: fit-content;
  padding: 20px;
  z-index: 1;
  @media (max-width: 768px) {
    width: calc(100% - 16px);
    margin: 0 8px;
  }
`
export const Setting = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #fff;
`
export const Form = styled.form`
  padding: 52px 79px;

  @media (max-width: 768px) {
    padding: 32px 40px;
  }
  @media (max-width: 576px) {
    padding: 16px;
  }
`

export const StyleButton = styled(Button)`
  display: block;
  margin: 0 auto;
`
