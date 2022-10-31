import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  margin-bottom: 65px;

  @media (max-width: 756px) {
    flex-direction: column;
    align-items: center; 
  }
`

export const Visual = styled.span`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 20px;
  background-color: #FFD748;
  opacity: 0.56;
  padding: 10px 20px;
  color: #423F45;
  font-size: 32px;
  line-height: 44px;
  margin-right: 5px;
  margin-bottom: 30px;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
    -moz-box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
    box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.23);
  }
`
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  &:checked + span {
      background-color: #FFD748;
      opacity: 1;
  }
`