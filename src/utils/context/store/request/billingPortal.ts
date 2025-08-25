import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps } from "store-context";

export const billingPortal = async ({ dispatch, sessionId }: StoreDispatchProps) => {
  try {
    const { data } = await axiosAuth.get(`/stripe/billing-portal/${sessionId}`);
    if (data) window.location.href = data;
  } catch (error) {
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  }
};
