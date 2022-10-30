import { useRouter } from "next/router";
import React, { FC, FormEventHandler } from "react";
import View from "../../component/GameSetting";
import {SESSION} from '../../config/route';

const AMOUNT_OPTIONS = ['2', '3', '4', '5']
const VARIANT_OPTIONS = ['A', '9', '19', '50', '99', '999']
const DIR_OPTIONS = ['По возрастанию', 'По убыванию']

const GameSetting: FC = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const indexOfAmount = +(data.get('amount')?.toString() || '');
    const amount = AMOUNT_OPTIONS[indexOfAmount];

    const indexOfVariant = +(data.get('variant')?.toString() || '');
    const variant = VARIANT_OPTIONS[indexOfVariant];

    const dirTitle = data.get('dir');
    const dir = dirTitle === 'По возрастанию' ? 'asc' : 'desc';
    router.push(`${SESSION}?amount=${amount}&variant=${variant}&dir=${dir}`)
    
  };

  return (
    <View
      onSubmit={handleSubmit}
      amountOptions={AMOUNT_OPTIONS}
      variantOptions={VARIANT_OPTIONS}
      dirOptions={DIR_OPTIONS}
    />
  );
};

export default GameSetting;
