import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { AdminDisptachProps } from "app-admin";

export const createMedia = async (props: AdminDisptachProps) => {
  const { appId, dispatch, handleAppAssets, values } = props;

  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosAuth.post(`/app/add-media/${appId}`, values);
    if (data && handleAppAssets) handleAppAssets(data);
  } catch (error) {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  }
};
