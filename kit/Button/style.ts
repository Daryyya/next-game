import styled from "@emotion/styled";

export const Btn = styled.button`
  font-family: var(--font-title);
  padding: 12px 75px;
  color: #FFF;
  font-size: 32px;
  background-color: #38DF7A;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
    -moz-box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
    box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
  }
  &:active {
    opacity: 0.6;
  }
`
