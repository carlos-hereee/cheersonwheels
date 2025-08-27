// import { axiosMedia } from "@utils/axios/axiosMedia";
// import { A_ADMIN } from "@utils/actions/AdminActions";
// import type { AdminDisptachProps } from "app-admin";

// export const updateNewsletter = async (props: AdminDisptachProps) => {
//   const { dispatch, appId, handleAppAssets, values } = props;
//   dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
//   const { data } = await axiosMedia.post(`/app/update-newsletter/${appId}`, values);
//   if (handleAppAssets) handleAppAssets(data);
//   dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
// };
