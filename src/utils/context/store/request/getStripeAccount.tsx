import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { StoreDispatchProps, StripeConfig } from "store-context";

export const getStripeAccount = async ({ appId, dispatch }: StoreDispatchProps) => {
  // require key variable
  try {
    dispatch({ type: A_STORE.IS_LOADING, payload: true });
    const { data } = await axiosAuth.get<{ account: StripeConfig }>(`/stripe/account/${appId}`);
    dispatch({ type: A_STORE.SET_STRIPE_CONFIG, payload: data.account });
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  } catch (error) {
    if (isDev) console.log("error :>> ", error);
  }
};
