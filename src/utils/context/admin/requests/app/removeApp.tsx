import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_ADMIN } from "@utils/actions/AdminActions";
import type { AdminDisptachProps } from "app-admin";

export const removeApp = async ({ appId, dispatch, handleAppAssets }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.delete(`/app/delete-app/${appId}`);
    handleAppAssets(data);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    // isDev && console.log("error", error);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  }
};
