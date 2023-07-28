"use client";

import { useCurrency } from "@/store/currencyContext";
import { ChangeEvent, useEffect } from "react";

const SelectCurrency = () => {
  const { currency, symbol, setCurrency } = useCurrency();

  // const currency = "";
  // const setCurrency = (currency: string) => {
  //   // console.log(currency);
  // };

  return (
    <select
      id="to-currency"
      className="p-1 px-2 rounded-sm bg-lime-400 text-black/60 outline-none"
      value={currency}
      onChange={(evt: ChangeEvent<HTMLSelectElement>) =>
        setCurrency(evt.target.value)
      }>
      <option value="rsd">RSD</option>
      <option value="eu">EU</option>
      <option value="us">US</option>
    </select>
  );
};

export default SelectCurrency;
