import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_ADMIN } from "@utils/actions/AdminActions";
import { AdminDisptachProps } from "app-admin";
// import { AxiosError } from "axios";

export const addCalendar = async (props: AdminDisptachProps) => {
  const { dispatch, appId, handleAppAssets, values } = props;
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.post(`/calendar/${appId}`, values);
    handleAppAssets(data);
    // dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    // console.log("error :>> ", error);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
    // const err = error as AxiosError;
  }
};
