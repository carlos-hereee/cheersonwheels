import { A_AUTH } from "@utils/actions/AuthActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import type { AuthDispatchProps } from "auth-context";
import data from "@data/data.json";
import { axiosError } from "@utils/axios/axiosError";

export const signOut = async ({ dispatch }: AuthDispatchProps) => {
  try {
    dispatch({ type: A_AUTH.IS_LOADING, payload: true });
    await axiosAuth.delete("/auth/logout");
    // reset user and access token
    dispatch({ type: A_AUTH.SET_USER_DATA, payload: data.resetUserData });
    dispatch({ type: A_AUTH.SET_ACCESS_TOKEN, payload: "" });
    dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  } catch (error) {
    axiosError({ dispatch, error, type: "auth", target: "logout" });
  }
};
