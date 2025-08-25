import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_ADMIN } from "@utils/actions/AdminActions";
import { AdminDisptachProps } from "app-admin";

export const updateMenuItem = async ({ appId, dispatch, handleAppAssets, uid, values }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  if (!uid) throw Error("uid is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.put(`/app/${appId}/menu/${uid}`, values);
    handleAppAssets(data);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    // isDev && console.log("error", error);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  }
};
