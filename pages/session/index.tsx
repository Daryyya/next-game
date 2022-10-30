import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HOME } from "../../config/route";
import { data, Style } from "../../config/gameStyle";
import Background from "../../kit/Background";
import Game from '../../container/Game'
import { Main, Inner } from "./style";

const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const Session = () => {
  const router = useRouter();
  const [style, setStyle] = useState<Style>(data[0]);

  useEffect(() => setStyle(data[randomIntFromInterval(0, 3)]), [])

  const { amount, variant, dir } = router.query as any;
  
  if (!amount || !variant || !dir) {
    router.push(HOME);
    return null;
  }

  return (
    <Main>
      <Background src={style.bg} alt="bg" priority fill />
      <Inner>
        <Game
          amount={amount}
          variant={variant}
          dir={dir}
          itemsBg={style.itemsBg}
        />
      </Inner>
    </Main>
  );
};

export default Session;
