import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { axiosError } from "@utils/axios/axiosError";
import type { AdminDisptachProps, AppAssets } from "app-admin";
import type { DataResponse } from "data-response";

export const removeStore = async ({ dispatch, handleAppAssets, appId }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
    const { data }: DataResponse<AppAssets> = await axiosAuth.delete(`/store/remove-store/${appId}`);
    if (data) handleAppAssets(data);
  } catch (error) {
    axiosError({ error, dispatch, target: "removeMerch", type: "form-error" });
  }
};
