import { A_LOG } from "@utils/actions/LogActions";
import { LogDispatchProps } from "log-context";

// add message to log
export const addToLog = ({ dispatch, data }: LogDispatchProps) => {
  // require key variable
  if (!data) throw Error("data is required");
  dispatch({ type: A_LOG.IS_LOADING, payload: true });
  dispatch({ type: A_LOG.ADD_MESSAGE_TO_LOG, payload: data });
};
