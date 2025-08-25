import type { AuthSchema } from "auth-context";
import { createContext } from "react";

export const AuthContext = createContext<AuthSchema>({} as AuthSchema);
