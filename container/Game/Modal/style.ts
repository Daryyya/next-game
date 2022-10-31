import styled from "@emotion/styled";
import NextLink from "next/link";

export const ModalStyle = styled.div`
  position: fixed;
  display: flex;
  padding: 70px;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`

export const Overlay = styled.div`

  position: relative;
  padding: 20px;
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
  height: fit-content;
  background: linear-gradient(#67DF89, #8D67DF00);
  border-radius: 40px;
`

export const Wrapper = styled.div`
  padding: 23px 24px 29px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #FFF;
  border-radius:25px;
  width: 100%;
  height: 100%;
`

export const Title = styled.p`
  font-family: var(--font-rounded-huge);
  font-size: 128px;
  line-height: 163px;
  filter: drop-shadow(0px 4px 4px rgba(30, 129, 58, 0.25));
  color: #FFE44F;
  text-shadow : 0 0 25px rgb(30, 129, 58);
  margin-bottom: 22px;
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 576px) {
    padding: 5px 20px;
    font-size: 50px;
  }
`

export const Text = styled.p`
  color: #5F40A1;
  font-size: 40px;
  line-height: 51px;
  font-family: var(--font-rounded);
  margin-bottom: 73px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`

export const StyledNextLink = styled(NextLink)`
  padding: 12px 75px;
  color: #FFF !important;
  font-size: 32px;
  background-color: #38DF7A;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: var(--font-rounded-huge);
  font-size: 40px;
  line-height: 51px;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 30px;
  }
  @media (max-width: 576px) {
    padding: 5px 20px;
    font-size: 24px;
  }
`