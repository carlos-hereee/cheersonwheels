import type { CheckoutSchema } from "checkout-context";
import { createContext } from "react";

export const CheckoutContext = createContext<CheckoutSchema>({} as CheckoutSchema);
