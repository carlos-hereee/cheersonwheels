// import { A_ADMIN } from "@utils/actions/AdminActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// import type { AdminDisptachProps } from "app-admin";

// export const updateOrder = async ({ dispatch, option, appId, from, order, handleAppAssets }: AdminDisptachProps) => {
//   // require key variable
//   // require key variable
//   if (!option) throw Error("option is required");
//   if (!appId) throw Error("appId is required");
//   if (!order) throw Error("order is required");
//   if (!handleAppAssets) throw Error("handleAppAssets is required");
//   try {
//     dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
//     dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: "LOADING" });
//     const { data } = await axiosAuth.put(`/store/${appId}/order/${option}/from/${from}`, { order });
//     handleAppAssets(data);
//     dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
//   } catch (error) {
//     dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
//   }
// };
