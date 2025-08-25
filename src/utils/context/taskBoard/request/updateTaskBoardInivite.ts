import { A_APP } from "@utils/actions/AppActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { TaskBoardDispatch } from "task-board-context";

export const updateTaskBoardInivite = async ({ appId, id, user, status, dispatch }: TaskBoardDispatch) => {
  try {
    const route = appId ? `/task-board/${id}/invite` : "/task-board/invite";
    const { data } = await axiosAuth.put(route, { user, status });
    dispatch({ type: A_APP.SET_APP_TASKS, payload: data });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
