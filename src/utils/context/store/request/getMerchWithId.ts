import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { MerchProps, StoreDispatchProps } from "store-context";

export const getMerchWithId = async ({ merchId, dispatch }: StoreDispatchProps) => {
  try {
    const { data } = await axiosAuth.get<{ merch: MerchProps }>(`store/merch/${merchId}`);
    dispatch({ type: A_STORE.SET_MERCH, payload: data.merch });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
