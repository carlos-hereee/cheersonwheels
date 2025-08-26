// import { A_APP } from "@utils/actions/AppActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// import type { AppDispatchProps } from "app-context";

// export const buildMap = async ({ dispatch, map, appId, dimensions, updateAppData, name }: AppDispatchProps) => {
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.post(`/app/${appId}/build-map`, { map, dimensions, name });
//     if (updateAppData) updateAppData(data);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// };
