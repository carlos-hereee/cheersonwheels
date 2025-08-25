import type { ICalendarSchema } from "app-calendar";
import { createContext } from "react";

export const CalendarContext = createContext<ICalendarSchema>({} as ICalendarSchema);
