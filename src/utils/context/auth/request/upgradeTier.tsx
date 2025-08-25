import { axiosAuth } from "@utils/axios/axiosAuth";
import type { AuthDispatchProps } from "auth-context";

export const upgradeTier = async ({ updateUser, stripeConfirmation }: AuthDispatchProps) => {
  try {
    const { data } = await axiosAuth.put("/auth/link-account", stripeConfirmation);
    if (updateUser) updateUser(data.user);
  } catch (error) {
    console.log("error updating user data :>> ", error);
  }
};
