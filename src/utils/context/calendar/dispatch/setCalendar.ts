import { A_CALENDAR } from "@utils/actions/CalendarAction";
import { CalendarDispatchProps } from "app-calendar";

export const setCalendar = ({ dispatch, calendar }: CalendarDispatchProps) => {
  // require key variable
  dispatch({ type: A_CALENDAR.IS_LOADING, payload: true });
  if (calendar) {
    if (calendar.calendarId) dispatch({ type: A_CALENDAR.SET_CAL_ID, payload: calendar.calendarId });
    if (calendar.calendarLink) dispatch({ type: A_CALENDAR.SET_CAL_LINK, payload: calendar.calendarLink });
    if (calendar.theme) dispatch({ type: A_CALENDAR.SET_THEME, payload: calendar.theme });
    if (calendar.closeTime) dispatch({ type: A_CALENDAR.SET_CAL_CLOSE_TIME, payload: calendar.closeTime });
    if (calendar.startTime) dispatch({ type: A_CALENDAR.SET_CAL_START_TIME, payload: calendar.startTime });
    if (calendar.workWeek) dispatch({ type: A_CALENDAR.SET_CAL_WORK_WEEK, payload: calendar.workWeek });
    if (calendar.name) dispatch({ type: A_CALENDAR.SET_CAL_NAME, payload: calendar.name });
    if (calendar.schedule) dispatch({ type: A_CALENDAR.SET_CAL_SCHEDULE, payload: calendar.schedule });
    if (calendar.events) dispatch({ type: A_CALENDAR.SET_CAL_EVENTS, payload: calendar.events });
  } else dispatch({ type: A_CALENDAR.SET_ERROR, payload: "Unable to update calendar" });
  dispatch({ type: A_CALENDAR.IS_LOADING, payload: false });
};
