import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import makeEmptyArray from "../../helper/makeEmptyArray";
import ItemList from './ItemList'
import { 
  Wrapper,
  Direction, 
  DirectionText,
  ResultWrapper, 
  ResultPlace,
  ResultText
} from "./style";

export interface Item {
  backround: string | StaticImageData;
  value: string;
}

interface Props {
  list: Item[];
  resultBg: string | StaticImageData;
  onPick: (value: string) => void;
  dir: "asc" | "desc";
  results: Item[];
}

const Game: FC<Props> = (props) => {
  const { list, dir, resultBg, onPick, results } = props;

  return (
    <Wrapper>
        <ItemList list={list} onPick={onPick} results={results} />
        <Direction direction={dir}>
          <DirectionText>
            {dir === "desc" ? "По убыванию" : "По возрастанию"}
          </DirectionText>
        </Direction>
        <ResultWrapper>
          <Image src={resultBg} alt='' fill/>
          {makeEmptyArray(list.length + 1).map(el => (
            <ResultPlace key={el}>
              {results[el] && (
                <div>
                  <Image src={results[el].backround} alt='' fill />
                  <ResultText>{results[el].value}</ResultText>
                </div>
              )}
            </ResultPlace>
          ))}
        </ResultWrapper>
    </Wrapper>
  );
};

export default Game;
