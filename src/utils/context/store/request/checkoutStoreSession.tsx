import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps } from "store-context";
// import { errors } from "@data/data.json";

export const checkoutStoreSession = async ({ dispatch, sessionCart, user }: StoreDispatchProps) => {
  // require key variable
  if (!sessionCart) throw Error("sessionCart is required");
  dispatch({ type: A_STORE.IS_LOADING, payload: true });
  if (!user || !user.name || !user.email || !user.phone) {
    // checkout error client information is required
    // dispatch({ type: A_STORE.SET_ERROR, payload: errors.clientInformationRequired });
  } else {
    try {
      // reset error
      dispatch({ type: A_STORE.SET_ERROR, payload: "" });
      const cart = sessionCart.merch.map((m) => ({ merchId: m.merchId, quantity: m.quantity || 1 }));
      const { data } = await axiosAuth.post(`/store/checkout-store-session/${sessionCart.storeId}`, {
        cart,
        client: user,
      });
      dispatch({ type: A_STORE.SET_STORE_ORDER, payload: data });
      dispatch({ type: A_STORE.IS_LOADING, payload: false });
    } catch (error) {
      // const res = error as AxiosError;
      // dispatch({ type: A_STORE.SET_ERROR, payload: res.response?.data as string });
      // dispatch({ type: A_STORE.IS_LOADING, payload: false });
    }
  }
};
