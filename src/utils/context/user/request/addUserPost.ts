import { USER_ACTIONS } from "@utils/actions/UserActions";
import { axiosMedia } from "@utils/axios/axiosMedia";
import { isDev } from "@utils/config";
import type { UserSchema } from "auth-context";
import type { DataResponse } from "data-response";
import type { UserDispatchProps } from "user-context";

export const addUserPost = async ({ post, updateUser, dispatch }: UserDispatchProps) => {
  try {
    const { data }: DataResponse<{ user: UserSchema }> = await axiosMedia.post(`user/add-post`, post);
    if (updateUser) updateUser(data.user);
    dispatch({ type: USER_ACTIONS.SET_STATUS, payload: "SUCCESS" });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
