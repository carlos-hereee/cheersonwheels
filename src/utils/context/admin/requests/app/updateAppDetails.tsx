import { axiosMedia } from "@utils/axios/axiosMedia";
import { A_ADMIN } from "@utils/actions/AdminActions";
import { AdminDisptachProps } from "app-admin";
import { axiosError } from "@utils/axios/axiosError";

export const updateAppDetails = async ({ dispatch, values, appId, handleAppAssets }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosMedia.put(`/app/update-app-details/${appId}`, values);
    if (data) handleAppAssets(data);
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  } catch (error) {
    axiosError({ error, dispatch, target: "updateAppDetails", type: "form-error" });
  }
};
