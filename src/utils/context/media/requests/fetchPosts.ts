// import { A_MEDIA } from "@utils/actions/MediaActions";
// import { axiosAuth } from "@utils/axios/axiosAuth";
// import type { MediaDispatchProps } from "media-context";

// export const fetchPosts = async ({ dispatch, appId }: MediaDispatchProps) => {
//   try {
//     const { data } = await axiosAuth.get(`/post/${appId}`);
//     dispatch({ type: A_MEDIA.SET_POSTS, payload: data });
//   } catch (error) {
//     dispatch({ type: A_MEDIA.SET_ERROR, payload: "uanble to create post" });
//   }
// };
