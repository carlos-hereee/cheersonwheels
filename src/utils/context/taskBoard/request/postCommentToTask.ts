import { A_TASK } from "@utils/actions/TaskBoardAction";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const postCommentToTask = async ({ values, id, taskId, dispatch }: TaskBoardDispatch) => {
  try {
    const { data } = await axiosAuth.post(`/task-board/${id}/task/${taskId}/comment`, values);
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
