import { FC, useState } from "react";
import View from '../../component/Game'
import { Style } from "../../config/gameStyle";
import Modal from "./Modal";

interface Props {
  amount: '2' | '3' | '4' | '5';
  variant: 'A' | '9' | '19' | '50' | '99' | '999';
  dir: 'asc' | 'desc';
  itemsBg: Style['itemsBg']
}

const Game: FC<Props> = (props) => {
  const { itemsBg, amount, variant, dir } = props;
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <View />
      {isDone && <Modal />}
    </>
  )
}

export default Game;
