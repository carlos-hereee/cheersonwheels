// import { axiosAuth } from "@utils/axios/axiosAuth";
// import { A_APP } from "@utils/actions/AppActions";
// import type { AppDispatchProps } from "app-context";
// import { AxiosError } from "axios";

// export const stripeAccountLink = async ({ dispatch, appId }: AppDispatchProps) => {
//   try {
//     dispatch({ type: A_APP.IS_LOADING, payload: true });
//     const { data } = await axiosAuth.post(`/stripe/account-link/${appId}`);
//     dispatch({ type: A_APP.SET_REDIRECT_URL, payload: data });
//     dispatch({ type: A_APP.IS_LOADING, payload: false });
//   } catch (error) {
//     const err = error as AxiosError;
//     dispatch({ type: A_APP.SET_APP_ERROR, payload: `${err.response?.data}` });
//     dispatch({ type: A_APP.IS_LOADING, payload: false });
//   }
// };
