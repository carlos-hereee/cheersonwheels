import { A_AUTH } from "@utils/actions/AuthActions";
import type { AuthDispatchProps } from "auth-context";

export const clearStranded = ({ dispatch }: AuthDispatchProps) => {
  dispatch({ type: A_AUTH.IS_LOADING, payload: true });
  dispatch({ type: A_AUTH.SET_ERROR, payload: { stranded: "" } });
  dispatch({ type: A_AUTH.IS_LOADING, payload: false });
};
