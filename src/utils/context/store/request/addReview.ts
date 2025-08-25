import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { StoreDispatchProps } from "store-context";

export const addReview = async ({ merchId, data: d, dispatch }: StoreDispatchProps) => {
  try {
    const { data } = await axiosAuth.post(`store/merch/${merchId}/review`, d);
    dispatch({ type: A_STORE.SET_MERCH, payload: data.merch });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
