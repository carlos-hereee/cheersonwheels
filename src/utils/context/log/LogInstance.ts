import type { LogSchema } from "log-context";
import { createContext } from "react";

export const LogContext = createContext<LogSchema>({} as LogSchema);
