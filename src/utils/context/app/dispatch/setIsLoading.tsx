import { A_APP } from "@utils/actions/AppActions";
import type { AppDispatchProps } from "app-context";

export const setIsLoading = ({ dispatch, isLoading }: AppDispatchProps) => {
  if (isLoading) dispatch({ type: A_APP.IS_LOADING, payload: isLoading });
  else dispatch({ type: A_APP.IS_LOADING, payload: false });
};
