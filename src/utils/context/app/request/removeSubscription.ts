// import { A_APP } from "@utils/actions/AppActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// // import { axiosMedia } from "@utils/axios/axiosMedia";
// import { isDev } from "@utils/config";
// import type { AppDispatchProps } from "app-context";

// export const removeSub = async ({ dispatch, appId, id, updateUser }: AppDispatchProps) => {
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.delete(`/app/delete-subscription/${appId || "platform"}/${id}`);
//     if (updateUser) updateUser(data.user);
//     dispatch({ type: A_APP.SET_APP_MESSAGE, payload: "SUCCESS" });
//     dispatch({ type: A_APP.IS_LOADING, payload: false });
//   } catch (error) {
//     if (isDev) console.log("error :>> ", error);
//   }
// };
