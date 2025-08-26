// import { A_APP } from "@utils/actions/AppActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// import type { AppDispatchProps } from "app-context";

// export const editMap = async ({ dispatch, appId, updateAppData, iMap }: AppDispatchProps) => {
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.put(`/app/${appId}/update-map`, iMap);
//     if (updateAppData) updateAppData(data);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// };
