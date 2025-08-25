import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps } from "store-context";

export const managePayouts = async ({ appId, data, amount }: StoreDispatchProps) => {
  // dispatch({ type: A_STORE.IS_LOADING, payload: true });
  const response = await axiosAuth.post(`stripe/account/${appId}/payouts/${data}`, { amount });
  return response;
  // dispatch({ type: A_STORE.SET_STRIPE_BALANCE, payload: data });
  // dispatch({ type: A_STORE.IS_LOADING, payload: false });
};
