import { A_TASK } from "@utils/actions/TaskBoardAction";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const assignToTask = async ({ id, taskId, userId, dispatch, status }: TaskBoardDispatch) => {
  try {
    const { data } = await axiosAuth.put(`task-board/${id}/assign/${taskId}/${userId}`, { status });

    dispatch({ type: A_TASK.SET_REQUEST_STATUS, payload: "CONFIRM" });
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
