import { axiosAuth } from "@utils/axios/axiosAuth";
import { CalendarDispatchProps } from "app-calendar";

export const fetchCalendar = async ({ appId, updateCalendar }: CalendarDispatchProps) => {
  const { data } = await axiosAuth.get(`/calendar/${appId}`);
  if (updateCalendar) updateCalendar(data);
};
