// import { axiosMedia } from "@utils/axios/axiosMedia";
// import { A_ADMIN } from "@utils/actions/AdminActions";
// import type { AdminDisptachProps } from "app-admin";

// export const updateSocialMedia = async (props: AdminDisptachProps) => {
//   const { appId, dispatch, handleAppAssets, values } = props;
//   // try {
//   dispatch({ type: A_ADMIN.IS_LOADING, payload: true });
//   const { data } = await axiosMedia.post(`app/update-medias/${appId}`, values);
//   if (handleAppAssets) handleAppAssets(data);
//   dispatch({ type: A_ADMIN.IS_LOADING, payload: false });
//   // } catch (error) {}
// };
