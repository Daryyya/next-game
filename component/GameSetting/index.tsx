import React, { FC } from 'react'
import { Wrapper, Setting, Form } from './style'
import Range from '../../kit/Range'

interface Props {
  onSubmit: () => void;
}

const GameSetting: FC<Props> = (props) => {
  const { onSubmit } = props;

  return (
    <Wrapper>
      <Setting>
        <Form>
          <Range title='Кол-во предметов' options={['2', '3', '4', '5']}/>
          <Range title='Значения' options={['A', '9', '19', '50', '99', '999']}/>
        </Form>
      </Setting>
    </Wrapper>
  )
}

export default GameSetting