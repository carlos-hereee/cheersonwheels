import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps, StripeBalance } from "store-context";

export const getStripeBalance = async ({ dispatch, appId }: StoreDispatchProps) => {
  dispatch({ type: A_STORE.IS_LOADING, payload: true });
  const { data } = await axiosAuth.get(`stripe/account/${appId}/balance`);
  dispatch({ type: A_STORE.SET_STRIPE_BALANCE, payload: data as StripeBalance });
  dispatch({ type: A_STORE.IS_LOADING, payload: false });
};
