import React, { FC, FormEventHandler } from 'react'
import Range from '../../kit/Range'
import Radio from '../../kit/Radio';
import { Wrapper, Setting, Form, StyleButton } from './style'


interface Props {
  amountOptions: string[];
  variantOptions: string[];
  dirOptions: string[];
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const GameSetting: FC<Props> = (props) => {
  const { onSubmit, amountOptions, dirOptions, variantOptions } = props;

  return (
    <Wrapper>
      <Setting>
        <Form onSubmit={onSubmit}>
          <Range name='amount' title='Кол-во предметов' options={amountOptions}/>
          <Range name='variant' title='Значения' options={variantOptions}/>
          <Radio name='dir' options={dirOptions}/>
          <StyleButton>Играть</StyleButton>
        </Form>
      </Setting>
    </Wrapper>
  )
}

export default GameSetting