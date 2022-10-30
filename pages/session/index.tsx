import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import Background from "../../kit/Background";
import { data, Style } from "./data";
import { HOME } from "../../config/route";
import { Wrapper, Inner } from "./style";
import Modal from "./Modal";

const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const Session = () => {
  const router = useRouter();
  console.log(router.query);

  const [style] = useState<Style>(data[randomIntFromInterval(0, 3)]);

  return (
    <Wrapper>
      <Background src={style.bg} alt="bg" priority fill />
      <Inner>
        <Link href={HOME} style={{ fontSize: 40 }}>
          home
        </Link>
      </Inner>
      <Modal/>
    </Wrapper>
  );
};

export default Session;
