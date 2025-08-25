import { A_CALENDAR } from "@utils/actions/CalendarAction";
import { CalendarDispatchProps } from "app-calendar";

export const setSelectedDay = ({ dispatch, day }: CalendarDispatchProps) => {
  // require key variable
  dispatch({ type: A_CALENDAR.IS_LOADING, payload: true });
  if (day) dispatch({ type: A_CALENDAR.SET_CAL_SELECTED_DAY, payload: day });
  else dispatch({ type: A_CALENDAR.SET_ERROR, payload: "Unable to adjust day" });
  dispatch({ type: A_CALENDAR.IS_LOADING, payload: false });
};
