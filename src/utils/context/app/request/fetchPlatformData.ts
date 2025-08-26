// import { axiosAuth } from "@utils/axios/axiosAuth";
// import { A_APP } from "@utils/actions/AppActions";
// import type { AppDispatchProps } from "app-context";

// export const fetchPlatformData = async ({ dispatch }: AppDispatchProps) => {
//   dispatch({ type: A_APP.IS_LOADING, payload: true });
//   const { data } = await axiosAuth.get("app/platform-data");
//   if (data.appList) dispatch({ type: A_APP.SET_APP_LIST, payload: data.appList });
//   if (data.platformTiers) dispatch({ type: A_APP.SET_PLATFORM_TIERS, payload: data.platformTiers });
//   dispatch({ type: A_APP.IS_LOADING, payload: false });
// };
// export const fetchAppUsers = async ({ dispatch, appId }: AppDispatchProps) => {
//   // dispatch({ type: A_APP.IS_LOADING, payload: true });
//   const { data } = await axiosAuth.get(`app/${appId}/user-data`);
//   if (data) dispatch({ type: A_APP.SET_APP_USERS, payload: data });
//   // dispatch({ type: A_APP.IS_LOADING, payload: false });
// };
