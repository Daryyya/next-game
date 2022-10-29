import React, { FC, useId, useState } from "react";
import { Wrapper, Input, DataList, Option, Title } from './style'

interface Props {
  name: string;
  title: string;
  options: string[];
}

const Range: FC<Props> = (props) => {
  const { name, title, options } = props;
  const [value, setValue] = useState(0);
  const id = useId()

  return (
    <Wrapper>
      <Title>{title}</Title>
      <DataList id={id}>
        {options.map((el, i) => (
          <Option onClick={() => setValue(i)} key={el}>
            {el}
          </Option>
        ))}
      </DataList>
    
      <Input
        name={name}
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        list={id}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />

    </Wrapper>
  );
};

export default Range;
