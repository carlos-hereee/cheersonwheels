// import { axiosAuth } from "@utils/axios/axiosAuth";
// import { A_APP } from "@utils/actions/AppActions";
// import type { AppDispatchProps } from "app-context";
// // import { AxiosError } from "axios";
// // import { DataResponse } from "utils/@types/response";
// // import { AppValues } from "app-forms";

// export const upgradeLatest = async (props: AppDispatchProps) => {
//   const { appId, dispatch, updateAppData } = props;
//   // require key variable
//   if (!updateAppData) throw Error("updateAppData is required");
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.post(`/app/latest/${appId}`);
//     updateAppData(data);
//   } catch (error) {
//     // const err = error as AxiosError;
//     // dispatch({ type: A_APP.SET_APP_ERROR, payload: `${err.response?.data}` });
//     // dispatch({ type: A_APP.IS_LOADING, payload: false });
//   }
// };
