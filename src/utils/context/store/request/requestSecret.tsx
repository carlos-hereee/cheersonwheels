import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps } from "store-context";

export const requestSecret = async (props: StoreDispatchProps) => {
  const { dispatch, cart } = props;
  try {
    dispatch({ type: A_STORE.IS_LOADING, payload: true });
    if (cart) {
      const { data } = await axiosAuth.post("/store/request-secret", { cart });
      dispatch({ type: A_STORE.SET_STRIPE_SECRET, payload: data as string });
    }
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  } catch (error) {
    console.log("error :>> ", error);
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  }
};
