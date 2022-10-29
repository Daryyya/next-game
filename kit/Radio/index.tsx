import React, { FC } from "react";
import { Input, Visual, Wrapper } from "./style";

interface Props {
  options: string[];
  name: string;
}

const Radio: FC<Props> = (props) => {
  const { options, name } = props;
  return (
    <Wrapper>
      {options.map((el, i) => (
        <label key={el}>
          <Input defaultChecked={i === 0} type="radio" name={name} value={el} />
          <Visual>{el}</Visual>
        </label>
      ))}
    </Wrapper>
  );
};

export default Radio;
