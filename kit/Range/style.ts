import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 54px;
`

export const Title = styled.p`
  font-size: 32px;
  line-height: 44px;
  color: #423F45;
  margin-bottom: 16px;
  text-align: center;
  font-family: var(--font-title);
`

export const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;

  &::-moz-range-track {
    background-color: #FFD748;
    height: 21px;
    border-radius: 10px;
  }

  &::-webkit-slider-runnable-track {
    background-color: #FFD748;
    height: 21px;
    border-radius: 10px;
  }
  
  &::-ms-fill-lower {
    background-color: #FFD748;
    border-radius: 10px; 
  }
  &::-ms-fill-upper {
    background-color: #FFD748;
  }

  &::-moz-range-thumb {
    background: #104987;
    border: none;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;

    &:active{
      transform: scale(1.2);
      transition: 0.3s;
    }
  }

  &::-webkit-slider-thumb {
    position: relative;
    left: 0;
    top: -1px;
    -webkit-appearance: none;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background: #104987;
    cursor: pointer;
    transition: 0.3s;

    &:active{
      transform: scale(1.2);
      transition: 0.3s;
    }
  }
`

export const DataList = styled.datalist`
    display: flex;
    justify-content: space-between;
    height: auto;
    overflow: hidden;
    margin-top: 16px; 
`

export const Option = styled.option`
  font-weight: 700;
  font-size: 24px;
  color: #4F4B61;
  line-height: 29px;
  text-align: center;
  width: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
  &:before {
      content: '';
    display: block;
    width: 0;
    height: auto;
    text-indent: 0;
  }
`
