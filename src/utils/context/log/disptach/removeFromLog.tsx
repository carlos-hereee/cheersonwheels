import { A_LOG } from "@utils/actions/LogActions";
import { LogDispatchProps } from "log-context";

export const removeFromLog = ({ dispatch, data, log }: LogDispatchProps) => {
  // require key variable
  if (!data) throw Error("data is required");
  if (!log) throw Error("log is required");
  dispatch({ type: A_LOG.IS_LOADING, payload: true });
  // use filter to remove unwanted data
  const message = log.filter((i) => i.uid !== data.uid);
  dispatch({ type: A_LOG.REMOVE_MESSAGE_FROM_LOG, payload: message });
};
