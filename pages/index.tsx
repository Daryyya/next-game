import Head from "next/head";
import GameSetting from "../container/GameSetting";
import Background from "../kit/Background";
import bgMainPage from "../public/image/bg-main-page-4x.jpg";
import { Main } from "../styles/home";

export default function Home() {
  return (
    <Main>
      <Background src={bgMainPage} alt="bg" priority fill />
      <GameSetting />
    </Main>
  );
}
