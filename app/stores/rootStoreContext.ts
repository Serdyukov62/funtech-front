import { createContext, useContext } from "react";
import RootStore from "./rootStore";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
    const context = useContext(RootStoreContext)
    if (!context) {
        throw new Error('RootStore not provided')
    }
    return context
}