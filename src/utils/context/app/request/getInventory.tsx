import { axiosAuth } from "@utils/axios/axiosAuth";
import { A_APP } from "@utils/actions/AppActions";
import type { AppDispatchProps } from "app-context";
import { AxiosError } from "axios";

export const getInventory = async ({ storeId, dispatch, updateAppData }: AppDispatchProps) => {
  try {
    dispatch({ type: A_APP.SET_LOADING_STATE, payload: { isLoadingInventory: true } });
    const { data } = await axiosAuth.get(`/store/inventory/${storeId}`);
    if (updateAppData) updateAppData(data);
    // dispatch({ type: A_APP.SET_STORE_INVENTORY, payload: data });
    dispatch({ type: A_APP.SET_LOADING_STATE, payload: { isLoadingInventory: false } });
  } catch (error) {
    const err = error as AxiosError;
    dispatch({ type: A_APP.SET_APP_ERROR, payload: `${err.response?.data}` });
    dispatch({ type: A_APP.SET_LOADING_STATE, payload: { isLoadingInventory: false } });
  }
};
