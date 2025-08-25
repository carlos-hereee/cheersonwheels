import { createContext } from "react";
import type { StoreSchema } from "store-context";

export const StoreContext = createContext<StoreSchema>({} as StoreSchema);
