import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosError } from "@utils/axios/axiosError";
import { axiosMedia } from "@utils/axios/axiosMedia";
import { AdminDisptachProps } from "app-admin";

export const updateLandingPage = async ({ dispatch, values, appId, handleAppAssets }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosMedia.put(`/app/update-landing-page/${appId}`, values);
    if (data) handleAppAssets(data);
  } catch (error) {
    axiosError({ error, dispatch, type: "form-error", target: "updateLanding" });
  }
};
