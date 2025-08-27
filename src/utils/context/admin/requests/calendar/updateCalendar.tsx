import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_ADMIN } from "@utils/actions/AdminActions";
import type { AdminDisptachProps } from "app-admin";
// import { AxiosError } from "axios";

export const updateCalendar = async ({ dispatch, appId, handleAppAssets, values }: AdminDisptachProps) => {
  // require key variable
  // console.log("values :>> ", values);
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.put(`/calendar/update/${appId}`, values);
    handleAppAssets(data);
    // dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    // console.log("error :>> ", error);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
    // const err = error as AxiosError;
  }
};
