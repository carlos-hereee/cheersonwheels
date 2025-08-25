import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps, StripeConfirmationProps } from "store-context";

export const confirmCheckoutIntent = async ({ dispatch, sessionId }: StoreDispatchProps) => {
  try {
    dispatch({ type: A_STORE.IS_LOADING, payload: true });
    const { data } = await axiosAuth.get(`/stripe/confirm-intent/${sessionId}`);
    dispatch({ type: A_STORE.SET_STRIPE_CONFIRMATION, payload: data as StripeConfirmationProps });
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  } catch (error) {
    console.log("error :>> ", error);
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  }
};
