import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_ADMIN } from "@utils/actions/AdminActions";
import { AdminDisptachProps } from "app-admin";

export const removeMedia = async ({ appId, dispatch, handleAppAssets, name }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.delete(`/app/delete-media/${appId}/media/${name}`);
    handleAppAssets(data);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    // isDev && console.log("error", error);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  }
};
