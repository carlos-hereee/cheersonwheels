import { A_TASK } from "@utils/actions/TaskBoardAction";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const getTaskBoardWithId = async ({ appId, dispatch }: TaskBoardDispatch) => {
  try {
    const route = appId ? `/task-board/app/${appId}` : "/task-board";
    const { data } = await axiosAuth.get(route);
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};

export const getTaskBoardWithBoardId = async ({ appId, dispatch, id }: TaskBoardDispatch) => {
  try {
    const route = appId ? `/task-board/app/${appId}` : `/task-board/${id}`;
    const { data } = await axiosAuth.get(route);
    dispatch({ type: A_TASK.SET_TASK_BOARD, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
export const getAllAppTaskBoards = async ({ appId, dispatch }: TaskBoardDispatch) => {
  try {
    const route = appId ? `/task-board/all/${appId}` : "/task-board/all";
    const { data } = await axiosAuth.get(route);
    dispatch({ type: A_TASK.SET_TASK_BOARDS, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
