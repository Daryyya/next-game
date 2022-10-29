import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 85px;
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
  margin-bottom: 10px;
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