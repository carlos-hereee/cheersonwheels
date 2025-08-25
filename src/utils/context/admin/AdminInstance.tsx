import type { AdminSchema } from "app-admin";
import { createContext } from "react";

export const AdminContext = createContext<AdminSchema>({} as AdminSchema);
