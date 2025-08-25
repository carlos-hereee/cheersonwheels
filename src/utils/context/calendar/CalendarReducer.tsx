import { A_CALENDAR } from "@utils/actions/CalendarAction";
import { CalendarActionProps, CalendarStateProps } from "app-calendar";

export const reducer = (state: CalendarStateProps, action: CalendarActionProps): CalendarStateProps => {
  switch (action.type) {
    case A_CALENDAR.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_CALENDAR.SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case A_CALENDAR.SET_CAL_NAME:
      return { ...state, name: action.payload };
    case A_CALENDAR.SET_CAL_ID:
      return { ...state, calendarId: action.payload };
    case A_CALENDAR.SET_CAL_LINK:
      return { ...state, calendarLink: action.payload };
    case A_CALENDAR.SET_CAL_CLOSE_TIME:
      return { ...state, closeTime: action.payload };
    case A_CALENDAR.SET_CAL_START_TIME:
      return { ...state, startTime: action.payload };
    case A_CALENDAR.SET_CAL_WORK_WEEK:
      return { ...state, workWeek: action.payload };
    case A_CALENDAR.SET_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case A_CALENDAR.SET_CAL_SCHEDULE:
      return { ...state, schedule: action.payload };
    case A_CALENDAR.SET_CAL_EVENTS:
      return { ...state, events: action.payload };
    case A_CALENDAR.SET_EVENT:
      return { ...state, event: action.payload };
    case A_CALENDAR.SET_CAL_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };
    case A_CALENDAR.SET_CAL_MEETING:
      return { ...state, meeting: action.payload };
    default:
      return state;
  }
};
