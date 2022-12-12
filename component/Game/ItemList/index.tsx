import { FC } from "react";
import { Item } from "../index";
import Image from "next/image";
import { ListWrapper, Button, Text } from "./style";

interface Props {
  list: Item[];
  onPick: (value: string) => void;
  results: Item[];
}

const ItemList: FC<Props> = (props) => {
  const { list, results, onPick } = props;

  return (
    <ListWrapper>
      {list.map(({ backround, value }, i) => (
        <Button
          onClick={() => onPick(value)}
          type="button"
          key={value}
          index={i}
          disabled={results.some((el) => el.value === value)}
        >
          <Image src={backround} alt={value} fill />
          <Text>{value}</Text>
        </Button>
      ))}
    </ListWrapper>
  );
};

export default ItemList;
