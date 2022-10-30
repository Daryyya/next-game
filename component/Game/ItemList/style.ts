import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 100px;
`

interface ButtonProps {
  index: number
}

export const Button = styled.button<ButtonProps>`
  position: absolute;
  width: 157px;
  height: 157px;
  transition: 0.3s;
  top: ${({index}) => {
    if (index === 0) return '0';
    if (index === 1) return 'calc(100% - 157px)';
    if (index === 2) return '0';
    if (index === 3) return 'calc(100% - 157px)';
    if (index === 4) return '0';

    return 0;
  }};
  left: ${({index}) => {
    if (index === 0) return '0';
    if (index === 1) return '20%';
    if (index === 2) return 'calc(50% - 157px/2)';
    if (index === 3) return '60%';
    if (index === 4) return 'calc(100% - 157px)';


    return 0;
  }};

  &:disabled {
    opacity: 0.5;
  }
`

export const Text = styled.p`
  position: absolute;
  font-size: 56px;
  color: #fff;
  font-weight: 700;
  -webkit-text-stroke: 1px #242546;
  text-shadow: 0 0 2px #242546;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
