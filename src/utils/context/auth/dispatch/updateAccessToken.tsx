import { A_AUTH } from "@utils/actions/AuthActions";
import type { AuthDispatchProps } from "auth-context";

// set accessToken
export const updateAccessToken = ({ dispatch, accessToken }: AuthDispatchProps) => {
  if (!accessToken) throw Error("accessToken is required");
  dispatch({ type: A_AUTH.IS_LOADING, payload: true });
  dispatch({ type: A_AUTH.SET_ACCESS_TOKEN, payload: accessToken });
  dispatch({ type: A_AUTH.IS_LOADING, payload: false });
};
