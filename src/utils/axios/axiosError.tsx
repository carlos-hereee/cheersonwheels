import { A_APP } from "@utils/actions/AppActions";
import { A_AUTH } from "@utils/actions/AuthActions";
import { isDev } from "@utils/config";
import type { AxiosError, AxiosResponseError } from "oops-err";
import type { LogMessage } from "log-context";
import { uniqueId } from "nexious-library";
import { A_LOG } from "@utils/actions/LogActions";

export const axiosError = ({ error, type, target, dispatch }: AxiosResponseError) => {
  // require key variable
  if (!dispatch) throw Error("authDispatch is required");
  // message for service disconnect
  const stranded = { stranded: "connection issues" };
  const err = error as AxiosError;
  // response message
  const message = `${err.response?.data}`;
  if (isDev) console.log("err :>> ", err);
  // auth response errors
  if (type === "auth") {
    // if service disconnect
    if (err.code === "ERR_NETWORK") dispatch({ type: A_AUTH.SET_ERROR, payload: stranded });
    else dispatch({ type: A_AUTH.SET_ERROR, payload: { [target]: message } });

    // update loading state
    dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  }
  // app response errors
  if (type === "app") {
    // if service disconnect
    if (err.code === "ERR_NETWORK") dispatch({ type: A_APP.SET_APP_ERROR, payload: message });
    // update loading state
    dispatch({ type: A_APP.IS_LOADING, payload: false });
  }
  if (type === "log") {
    const logMessage: LogMessage = { message: "", status: 500, uid: uniqueId() };
    // if service disconnect
    if (err.code === "ERR_NETWORK") {
      logMessage.message = "service disconnected";
      dispatch({ type: A_LOG.ADD_MESSAGE_TO_LOG, payload: logMessage });
    }
    // update loading state
    dispatch({ type: A_LOG.IS_LOADING, payload: false });
  }
};
