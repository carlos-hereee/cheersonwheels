import { A_TASK } from "@utils/actions/TaskBoardAction";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const updateTaskBoard = async ({ values, id, dispatch }: TaskBoardDispatch) => {
  try {
    const { data } = await axiosAuth.put(`task-board/update/${id}`, values);

    dispatch({ type: A_TASK.SET_REQUEST_STATUS, payload: "SUCCESS" });
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
