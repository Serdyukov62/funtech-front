import { createContext, useContext } from "react";
import store, { RootStore } from "./rootStore";

export const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error("RootStore not provided");
  }
  return context;
};
