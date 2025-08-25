declare module "app-calendar" {
  import { CalendarProps } from "app-types";
  import { A_CALENDAR } from "@utils/actions/CalendarAction";

  export type CalEvent = {
    date: string;
    list: IEvent[];
  };
  export type CalendarDayProp = {
    dayIdx: number;
    month: number;
    year: number;
    date: string;
    maxDays: number;
    weeks: number;
    start: number;
    day: number;
    yyyyddmm: string;
    ping?: number;
  };
  export interface EventAttendees {
    uid: string;
    userId: string;
    username: string;
    name: string;
    avatar: string;
    email: string;
    phone: number;
  }
  export interface PostEvent {
    appId: string;
    event: IEvent;
  }
  export interface IEvent {
    uid: string;
    eventId: string;
    date: string;
    name: string;
    details: string;
    startTime: string;
    createdAt?: string;
    endTime: string;
    isOpen: boolean;
    attendees: EventAttendees[];
  }
  export interface IEventSchema {
    eventId: string;
    calendarId: string;
    date: string;
    hero: string;
    events: IEvent[];
  }
  export interface CalendarSchema {
    calendarId: string;
    appId: string;
    hero: string;
    title: string;
    theme: string;
    schedule: { eventId: string }[];
    adminIds: { userId: string; role: string }[];
  }
  export interface MeetingDetials {
    uid: string;
    name: string;
    details: string;
    date: string;
    startTime: string;
    endTime: string;
  }
  export interface CalendarStateProps {
    isLoading: boolean;
    calendarId: string;
    calendarLink: string;
    closeTime: string;
    startTime: string;
    workWeek: string;
    name: string;
    theme: string;
    schedule: IEvent[];
    events: IEvent[];
    event: IEvent;
    errorMessage: string;
    requestStatus: string;
    meeting: MeetingDetials;
    selectedDay: CalEvent;
  }
  export interface ICalendarSchema extends CalendarStateProps {
    updateSelectedDay: (day: CalEvent) => void;
    setCalStatus: (day: string) => void;
    updateActiveEvent: (day: IEvent) => void;
    addCalendarEvent: (day: PostEvent) => void;
    updateMeeting: (day: MeetingDetials) => void;
    getCalendar: (appId: { appId: string }) => void;
  }
  export interface CalendarContainerProps {
    onRemove?: (key: string) => void;
    onClick?: () => void;
    onPhaseClick: (phase: DialogStatusProps) => void;
  }
  export interface CalendarDispatchProps {
    dispatch: React.Dispatch<CalendarActionProps>;
    updateCalendar?: (d: CalendarProps) => void;
    setCalStatus?: (d: string) => void;
    calendar?: CalendarProps;
    meeting?: MeetingDetials;
    day?: CalEvent;
    event?: IEvent;
    appId?: string;
  }
  export type CalendarActionProps =
    | { type: A_CALENDAR.IS_LOADING; payload: boolean }
    | {
        type:
          | A_CALENDAR.SET_ERROR
          | A_CALENDAR.SET_CAL_NAME
          | A_CALENDAR.SET_CAL_ID
          | A_CALENDAR.SET_CAL_LINK
          | A_CALENDAR.SET_CAL_CLOSE_TIME
          | A_CALENDAR.SET_CAL_START_TIME
          | A_CALENDAR.SET_REQUEST_STATUS
          | A_CALENDAR.SET_CAL_WORK_WEEK
          | A_CALENDAR.SET_THEME;

        payload: string;
      }
    | { type: A_CALENDAR.SET_CAL_SCHEDULE | A_CALENDAR.SET_CAL_EVENTS; payload: IEvent[] }
    | { type: A_CALENDAR.SET_EVENT; payload: IEvent }
    | { type: A_CALENDAR.SET_CAL_SELECTED_DAY; payload: CalEvent }
    | { type: A_CALENDAR.SET_CAL_MEETING; payload: MeetingDetials };
}
