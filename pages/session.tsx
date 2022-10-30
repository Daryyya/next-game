import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HOME } from "../config/route";
import { data, Style } from "../config/gameStyle";
import makeRandomNumber from "../helper/makeRandomNumber";
import Background from "../kit/Background";
import Game from '../container/Game'
import { Main, Inner } from "../styles/session";

const Session = () => {
  const router = useRouter();
  const [style, setStyle] = useState<Style | undefined>();
  useEffect(() => setStyle(data[makeRandomNumber(0, 3)]), [])
  const { amount, variant, dir } = router.query as any;

  if (!style) {
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
          style={style}
        />
      </Inner>
    </Main>
  );
};

export default Session;
