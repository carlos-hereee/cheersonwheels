import { axiosMedia } from "@utils/axios/axiosMedia";
import type { AuthDispatchProps } from "auth-context";

export const editAvatar = async ({ updateUser, data: d }: AuthDispatchProps) => {
  const { data } = await axiosMedia.post("/auth/avatar", d);
  if (updateUser) updateUser(data.user);
};
