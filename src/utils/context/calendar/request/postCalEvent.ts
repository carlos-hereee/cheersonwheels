// import { A_CALENDAR } from "@utils/actions/CalendarAction";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// import { CalendarDispatchProps } from "app-calendar";

// export const postCalEvent = async ({ dispatch, event, appId, updateCalendar, setCalStatus }: CalendarDispatchProps) => {
//   // require key variable
//   if (!event) throw Error("event param is required");
//   try {
//     dispatch({ type: A_CALENDAR.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.post(`/calendar/${appId}/add-event`, event);
//     if (updateCalendar) updateCalendar(data.calendar);
//     if (setCalStatus) setCalStatus("SUCCESS");
//   } catch (error) {
//     // const message = error.response.data;
//     if (setCalStatus) setCalStatus("ERROR");
//     // dispatch({ type: "SET_ERROR", payload: message });
//   }
// };
