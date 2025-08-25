import type { ChildProps } from "app-types";
import { useCallback, useContext, useMemo, useReducer } from "react";
import type { DUser } from "user-context";
import userState from "@data/state/userState.json";
import { AuthContext } from "@utils/context/auth/AuthInstance";
import type { UserSchema } from "auth-context";
import { reducer } from "./UserReducer";
import { addUserPost } from "./request/addUserPost";
import { updateUserData } from "./dispatch/updateUserData";
import { addTaskBoard } from "./request/addTaskBoard";
import { USER_ACTIONS } from "@utils/actions/UserActions";
import { UserContext } from "./UserContextInstance";

export const UserState = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(reducer, userState);
  const { updateUser } = useContext(AuthContext);

  const addPost = useCallback((data: DUser) => addUserPost({ dispatch, ...data, updateUser }), []);
  const setUserRequestStatus = useCallback(
    (data: string) => dispatch({ type: USER_ACTIONS.SET_STATUS, payload: data }),
    [],
  );
  const setUserData = useCallback((user: UserSchema) => updateUserData({ dispatch, user }), []);
  const createTaskBoard = useCallback((values: { [x: string]: string }) => addTaskBoard({ dispatch, values }), []);

  const userValues = useMemo(() => {
    return {
      isLoading: state.isLoading,
      userRequestStatus: state.userRequestStatus,
      calendarEvents: state.calendarEvents,
      user: state.user,
      boards: state.boards,
      addPost,
      setUserRequestStatus,
      setUserData,
      createTaskBoard,
    };
  }, [state.isLoading, state.userRequestStatus, state.calendarEvents, state.boards]);
  return <UserContext.Provider value={userValues}>{children}</UserContext.Provider>;
};
