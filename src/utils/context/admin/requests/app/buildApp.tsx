// import { A_ADMIN } from "@utils/actions/AdminActions";
// import { axiosError } from "@utils/axios/axiosError";
// import { axiosMedia } from "@utils/axios/axiosMedia";
// import type { AdminDisptachProps } from "app-admin";

// export const buildApp = async ({ dispatch, handleAppAssets, values }: AdminDisptachProps) => {
//   // require key variable
//   if (!values) throw Error("values is required");
//   if (!handleAppAssets) throw Error("handleAppAssets is required");
//   try {
//     dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
//     const { data } = await axiosMedia.post(`/app/init-app`, values);
//     if (data) handleAppAssets(data);
//   } catch (error) {
//     axiosError({ type: "form-error", error, dispatch, target: "initApp" });
//   }
// };
