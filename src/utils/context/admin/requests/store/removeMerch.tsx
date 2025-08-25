import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { axiosError } from "@utils/axios/axiosError";
import { AdminDisptachProps } from "app-admin";

export const removeMerch = async ({ dispatch, handleAppAssets, appId, merchId }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
    const { data } = await axiosAuth.delete(`/store/remove-merch/${appId}/${merchId}`);
    if (data) handleAppAssets(data);
  } catch (error) {
    axiosError({ error, dispatch, target: "removeMerch", type: "form-error" });
  }
};
