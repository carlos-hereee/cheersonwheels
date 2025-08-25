import { USER_ACTIONS } from "@utils/actions/UserActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { DataResponse } from "data-response";
import type { UserBoards, UserDispatchProps } from "user-context";

export const addTaskBoard = async ({ values, dispatch }: UserDispatchProps) => {
  try {
    console.log("values :>> ", values);
    const { data }: DataResponse<{ boards: UserBoards[] }> = await axiosAuth.post(`user/task-board`, values);
    console.log("values :>> ", data);
    dispatch({ type: USER_ACTIONS.SET_USER_TASK_BOARD, payload: data.boards });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
