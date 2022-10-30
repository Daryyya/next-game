import { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import View, { Item } from "../../component/Game";
import { Style } from "../../config/gameStyle";
import makeRandomNumber from "../../helper/makeRandomNumber";
import alphabet from "./alphabet";
import Modal from "./Modal";

interface Props {
  amount: "2" | "3" | "4" | "5";
  variant: "A" | "9" | "19" | "50" | "99" | "999";
  dir: "asc" | "desc";
  style: Style;
}

const sortNums = (list: Item[]) => {
  return [...list].sort((a, b) => Number(a.value) - Number(b.value));
}
const sortLetters = (list: Item[]) => {
  return [...list].sort((a, b) => alphabet.indexOf(a.value) - alphabet.indexOf(b.value));
}
const getLastByDir = (list: Item[], dir: "asc" | "desc") => {
  return dir === 'asc' ? list[0] : list[list.length -1]
}

const Game: FC<Props> = (props) => {
  const { amount, variant, dir, style } = props;
  const { itemsBg, resultBg } = style;
  const [isDone, setIsDone] = useState(false);
  const [list, setList] = useState<Item[]>([]);
  const [results, setResults] = useState<Item[]>([]);
  const sortFunc = variant === 'A' ? sortLetters : sortNums;

  useEffect(() => {
    if (!amount || !variant || !dir) {
      return;
    }

    const set = new Set<string>();
    const numAmount = Number(amount) + 1;
    while (set.size !== numAmount) {
      if (variant === "A") {
        const random = makeRandomNumber(0, alphabet.length - 1);
        set.add(alphabet[random]);
      } else {
        const random = makeRandomNumber(0, Number(variant) - 1);
        set.add(random.toString());
      }
    }
    const newList =Array.from(set).map((el, i) => ({ backround: itemsBg[i], value: el}));
    const sorted = sortFunc(newList)
    if (dir === 'asc') {
      setResults([sorted[0]]) 
    } else {
      setResults([sorted[sorted.length -1]]);
    }
    setList(newList);
  }, [amount, variant, dir]);

  useEffect(() => {
    if (results.length === Number(amount) + 1) {
      setIsDone(true)
    }
  }, [results.length]);

  const handlePick = (value: string) => {
    const sorted = dir === 'asc' ? sortFunc(list) : sortFunc(list).reverse();
    if (value === sorted[results.length].value) {
      const obj = sorted.find(el => el.value === value) as Item;
      setResults(p => [...p, obj])
    }
  }

  return (
    <>
      <View
        list={list.filter(el => el.value !== getLastByDir(sortFunc(list), dir)?.value)}
        resultBg={resultBg}
        onPick={handlePick}
        dir={dir}
        results={results}
      />
      {isDone && <Modal />}
    </>
  );
};

export default Game;
