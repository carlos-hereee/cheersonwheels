import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { OrderSchema, StoreDispatchProps } from "store-context";

export const trackCheckoutOrder = async ({ dispatch, orderId, accountId }: StoreDispatchProps) => {
  try {
    dispatch({ type: A_STORE.IS_LOADING, payload: true });
    const { data } = await axiosAuth.get(`/store/${accountId}/track-order/${orderId}`);
    dispatch({ type: A_STORE.SET_TRACK_ORDER, payload: data as OrderSchema });
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  } catch (error) {
    console.log("error :>> ", error);
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  }
};
