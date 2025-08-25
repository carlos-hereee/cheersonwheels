import { A_TASK } from "@utils/actions/TaskBoardAction";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const replyToTaskComment = async ({ dispatch, messageId, reply, id }: TaskBoardDispatch) => {
  try {
    const { data } = await axiosAuth.post(`task-board/${id}/task/comment/${messageId}`, reply);
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
