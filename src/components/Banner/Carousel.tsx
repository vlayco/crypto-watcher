"use client"

import { trendingCoins } from "@/config/api";
import { useCurrency } from "@/store/currencyContext";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [trending, setTrending] = useState('empty for now');

  // To be implemented soon.
  // const currency = 'get the selected currency from context';

  const { currency } = useCurrency();

  const fetchTrendingCoins = async () => {
    // const { data } = await fetch(trendingCoins('eu'));
    // setTrending(data);
  }

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <section className="flex flex-row items-center justify-center w-full">
      Carousel
    </section>
  )
}

export default Carousel;