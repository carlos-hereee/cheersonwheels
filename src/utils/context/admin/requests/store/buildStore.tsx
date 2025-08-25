import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { axiosError } from "@utils/axios/axiosError";
import type { AdminDisptachProps, AppAssets } from "app-admin";
import type { DataResponse } from "data-response";

export const buildStore = async ({ dispatch, handleAppAssets, values, appId }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  if (!values) throw Error("values is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
    const { data }: DataResponse<AppAssets> = await axiosAuth.post(`/store/build-store/${appId}`, values);
    if (data) handleAppAssets(data);
  } catch (error) {
    axiosError({ error, type: "form-error", dispatch, target: "buildStore" });
  }
};
