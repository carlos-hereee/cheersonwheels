// import { A_APP } from "@utils/actions/AppActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// // import { axiosMedia } from "@utils/axios/axiosMedia";
// import { isDev } from "@utils/config";
// import type { AppDispatchProps } from "app-context";

// export const addSubscription = async ({ dispatch, appId, subscription, updateUser }: AppDispatchProps) => {
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.post(`/app/create-subscription/${appId || "platform"}`, subscription);
//     // TODO: ADD SUBSCRIPTION TO LOCAL STATE
//     if (updateUser) updateUser(data.user);
//     dispatch({ type: A_APP.SET_APP_MESSAGE, payload: "SUCCESS" });
//     dispatch({ type: A_APP.IS_LOADING, payload: false });
//   } catch (error) {
//     if (isDev) console.log("error :>> ", error);
//   }
// };
