import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { StoreDispatchProps } from "store-context";

export const checkOutSession = async ({ dispatch, sessionCart, user }: StoreDispatchProps) => {
  // require key variable
  if (!sessionCart) throw Error("sessionCart is required");
  try {
    dispatch({ type: A_STORE.IS_LOADING, payload: true });
    // const cart = sessionCart.merch.map((c) => {
    //   return { quantity: c.quantity, storeId: c.storeId, merchId: c.merchId, priceId: c.priceId };
    // });
    // console.log("sessionCart :>> ", sessionCart);
    const cart = sessionCart.merch.map((c) => {
      return { quantity: c.quantity || 1, merchId: c.merchId, priceId: c.priceId, productId: c.productId };
    });
    const { data } = await axiosAuth.post("/store/create-checkout-session", {
      accountId: sessionCart.accountId,
      client: user,
      cart,
      store: {
        storeId: sessionCart.storeId,
        location: sessionCart.location,
        email: sessionCart.email,
        location2: sessionCart.location2,
      },
    });
    // redirect
    document.location.href = data;
    // console.log("data :>> ", data);
    // dispatch({ type: A_STORE.SET_STRIPE_SECRET, payload: data });
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  } catch (error) {
    // console.log("error :>> ", error);
    dispatch({ type: A_STORE.IS_LOADING, payload: false });
  }
};
