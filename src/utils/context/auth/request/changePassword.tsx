import { axiosAuth } from "@utils/axios/axiosAuth";
import type { AuthDispatchProps } from "auth-context";
import { A_AUTH } from "@utils/actions/AuthActions";
import { axiosError } from "@utils/axios/axiosError";

export const setChangePassword = async ({ credentials, dispatch }: AuthDispatchProps) => {
  if (!credentials) throw Error("credentials param is required");
  try {
    // require key variable
    const { data } = await axiosAuth.post(`/auth/change-password/${credentials?.username}`, credentials);
    dispatch({ type: A_AUTH.IS_LOADING, payload: true });
    dispatch({ type: A_AUTH.SET_ACCESS_TOKEN, payload: data });
    dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  } catch (error) {
    axiosError({ error, type: "auth", dispatch, target: "forgotPassword" });
  }
};
