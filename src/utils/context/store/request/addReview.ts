import { STORE_ACTIONS } from "@actions/StoreActions";
import { axiosAuth } from "@axios/axiosAuth";
import { isDev } from "@config";
import { StoreDispatchProps } from "store-context";

export const addReview = async ({ merchId, data: d, dispatch }: StoreDispatchProps) => {
  try {
    const { data } = await axiosAuth.post(`store/merch/${merchId}/review`, d);
    dispatch({ type: STORE_ACTIONS.SET_MERCH, payload: data.merch });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
