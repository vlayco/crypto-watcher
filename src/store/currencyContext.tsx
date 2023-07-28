import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextProps = {
  currency: string;
  symbol: string;
  setCurrency: Dispatch<SetStateAction<string>>;
};

const initialState: ContextProps = {
  currency: "rsd",
  symbol: "RSD",
  setCurrency: () => {},
};

const Currency = createContext(initialState);

const CurrencyContext = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState("rsd");
  const [symbol, setSymbol] = useState("RSD");

  useEffect(() => {
    if (currency === "usd") setSymbol("$");
    if (currency === "eu") setSymbol("€");
    if (currency === "rsd") setSymbol("RSD");
  }, [currency]);

  return (
    <Currency.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Currency.Provider>
  );
};

export default CurrencyContext;

export const useCurrency = () => {
  return useContext(Currency);
};
