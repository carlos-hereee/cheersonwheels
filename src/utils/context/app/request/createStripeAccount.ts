import { A_APP } from "@utils/actions/AppActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
// import { axiosMedia } from "@utils/axios/axiosMedia";
import { isDev } from "@utils/config";
import type { AppDispatchProps } from "app-context";
import type { DataResponse } from "data-response";

export const createStripeAccount = async ({ dispatch, appId }: AppDispatchProps) => {
  try {
    // dispatch({ type: A_APP.IS_LOADING, payload: true });
    const { data }: DataResponse<string> = await axiosAuth.post(`/stripe/build-store/${appId}`);

    dispatch({ type: A_APP.SET_REDIRECT_URL, payload: data });
  } catch (error) {
    if (isDev) console.log("error :>> ", error);
    dispatch({ type: A_APP.SET_APP_ERROR, payload: "Unable to create stripe account" });
  }
};
