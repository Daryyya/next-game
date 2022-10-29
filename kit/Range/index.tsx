import React, { FC, useId, useState } from "react";
import { Wrapper, Input, DataList, Option, Title } from './style'

interface Props {
  title: string;
  options: string[];
}

const Range: FC<Props> = (props) => {
  const { title, options} = props;
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
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        list={id}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      
      
      {/* <Input type="range" min={0} max={60} step={15} list={id}/>
      <DataList id={id}>
        <Option>0</Option>
        <Option>15</Option>
        <Option>30</Option>
        <Option>45</Option>
        <Option>60</Option>
      </DataList> */}

    </Wrapper>
  );
};

export default Range;
