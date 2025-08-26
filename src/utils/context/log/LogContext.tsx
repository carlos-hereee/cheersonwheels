// import { useCallback, useMemo, useReducer } from "react";
// import type { ChildProps } from "app-types";
// import type { LogMessage, PageType } from "log-context";
// import logState from "@data/state/logState.json";
// import { reducer } from "./LogReducer";
// import { addToLog } from "./disptach/addToLog";
// import { removeFromLog } from "./disptach/removeFromLog";
// import { A_LOG } from "@utils/actions/LogActions";
// import { LogContext } from "./LogInstance";

// export const LogState = ({ children }: ChildProps) => {
//   const [state, dispatch] = useReducer(reducer, { ...logState, status: "PRE-LAUNCH", page: "public" });

//   // add message
//   const addMessageToLog = useCallback((a: LogMessage) => addToLog({ dispatch, data: a }), []);
//   // remove message
//   const removeMessageFromLog = useCallback((a: LogMessage) => removeFromLog({ dispatch, data: a, log: state.log }), []);
//   const setPage = useCallback((a: PageType) => dispatch({ type: A_LOG.SET_PAGE, payload: a }), []);

//   const logValues = useMemo(() => {
//     return {
//       isLoading: state.isLoading,
//       log: state.log,
//       status: state.status,
//       page: state.page,
//       addMessageToLog,
//       removeMessageFromLog,
//       setPage,
//     };
//   }, [state.isLoading, state.status, state.log, state.page]);

//   return <LogContext.Provider value={logValues}>{children}</LogContext.Provider>;
// };
