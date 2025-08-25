import { A_AUTH } from "@utils/actions/AuthActions";
import type { AuthDispatchProps } from "auth-context";
import data from "@data/data.json";

// reset auth errors
export const clearAuthErrors = ({ dispatch }: AuthDispatchProps) => {
  dispatch({ type: A_AUTH.IS_LOADING, payload: true });
  dispatch({ type: A_AUTH.SET_ERROR, payload: data.resetAuthErrors });
  dispatch({ type: A_AUTH.SET_ERROR, payload: {} });
  dispatch({ type: A_AUTH.IS_LOADING, payload: false });
};
