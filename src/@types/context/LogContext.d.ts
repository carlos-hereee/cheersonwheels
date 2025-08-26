/* eslint-disable no-unused-vars */
declare module "log-context" {
  import { A_LOG } from "@utils/actions/LogActions";

  export type APP_STATUS = "PRE-LAUNCH" | "IDLE" | "LOADING" | "ERROR" | "SUCCESS" | string;
  export type PageType = "public" | "private" | "app";

  export interface LogMessage {
    uid: string;
    message: string;
    status: number;
    hint?: string;
  }
  export interface LogState {
    isLoading: boolean;
    status: APP_STATUS;
    page: PageType;
    log: LogMessage[] | [];
  }
  export interface LogSchema extends LogState {
    setPage: (pageType: PageType) => void;
  }
  export interface LogDispatchProps {
    dispatch: React.Dispatch<LogActionProps>;
    setAccessToken?: (accessToken: string) => void;
    data?: LogMessage;
    status?: APP_STATUS;
    log?: LogMessage[];
  }

  export type LogActionProps =
    | { type: A_LOG.IS_LOADING; payload: boolean }
    | { type: A_LOG.SET_LOG_STATUS; payload: APP_STATUS }
    | { type: A_LOG.ADD_MESSAGE_TO_LOG; payload: LogMessage }
    | { type: A_LOG.SET_PAGE; payload: PageType }
    | { type: A_LOG.REMOVE_MESSAGE_FROM_LOG; payload: LogMessage[] };
}
