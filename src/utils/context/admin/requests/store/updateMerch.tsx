import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { axiosError } from "@utils/axios/axiosError";
import { axiosMedia } from "@utils/axios/axiosMedia";
import type { AdminDisptachProps } from "app-admin";
import type { MerchProps } from "store-context";

export const updateMerch = async ({ dispatch, handleAppAssets, values, appId, merchId }: AdminDisptachProps) => {
  // require key variable
  if (!handleAppAssets) throw Error("handleAppAssets is required");
  if (!values) throw Error("values is required");
  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
    if ((values as MerchProps).merchId) {
      const { data } = await axiosAuth.put(`/store/update-merch/${appId}/stripe`, { merch: values });
      if (data) handleAppAssets(data);
    } else {
      const { data } = await axiosMedia.put(`/store/update-merch/${appId}/merch/${merchId}`, values);
      if (data) handleAppAssets(data);
    }
  } catch (error) {
    axiosError({ error, dispatch, target: "removeMerch", type: "form-error" });
  }
};
