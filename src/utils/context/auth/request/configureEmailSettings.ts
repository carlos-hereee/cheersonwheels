import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { AuthDispatchProps } from "auth-context";

export const configureEmailSettings = async ({ settings, updateUser, active }: AuthDispatchProps) => {
  try {
    const { data } = await axiosAuth.put(`auth/email-settings/${active}`, settings);
    if (updateUser) updateUser(data.user);
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
