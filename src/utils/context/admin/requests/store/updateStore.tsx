// import { A_ADMIN } from "@utils/actions/AdminActions";
// import { axiosError } from "@utils/axios/axiosError";
// import { axiosMedia } from "@utils/axios/axiosMedia";
// import type { AdminDisptachProps, AppAssets } from "app-admin";
// import type { DataResponse } from "data-response";

// export const updateStore = async ({ dispatch, handleAppAssets, values, appId }: AdminDisptachProps) => {
//   // require key variable
//   if (!values) throw Error("values is required");
//   if (!handleAppAssets) throw Error("handleAppAssets is required");
//   try {
//     dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
//     dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
//     const { data }: DataResponse<AppAssets> = await axiosMedia.put(`/store/update-store/${appId}`, values);
//     if (data) handleAppAssets(data);
//   } catch (error) {
//     axiosError({ error, dispatch, target: "updateStore", type: "form-error" });
//   }
// };
