import { A_LOG } from "@utils/actions/LogActions";
import { LogActionProps, LogState } from "log-context";

export const reducer = (state: LogState, action: LogActionProps): LogState => {
  switch (action.type) {
    case A_LOG.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_LOG.SET_LOG_STATUS:
      return { ...state, status: action.payload };
    case A_LOG.SET_PAGE:
      return { ...state, page: action.payload };
    case A_LOG.ADD_MESSAGE_TO_LOG:
      return { ...state, log: [...state.log, action.payload] };
    case A_LOG.REMOVE_MESSAGE_FROM_LOG:
      return { ...state, log: action.payload };
    default:
      return state;
  }
};
