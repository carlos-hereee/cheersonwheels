import { A_ADMIN } from "@utils/actions/AdminActions";
import { axiosMedia } from "@utils/axios/axiosMedia";
import { AdminDisptachProps } from "app-admin";

export const createPage = async (props: AdminDisptachProps) => {
  const { appId, dispatch, handleAppAssets, values } = props;

  try {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
    const { data } = await axiosMedia.post(`/app/add-page/${appId}`, values);
    if (data && handleAppAssets) handleAppAssets(data);
  } catch (error) {
    dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
  }
};
