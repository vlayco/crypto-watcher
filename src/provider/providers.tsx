"use client";

import CurrencyContext from "@/store/currencyContext";

const Providers = (
  {
    children,
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <CurrencyContext>
      {children}
    </CurrencyContext>
  )
};

export default Providers;