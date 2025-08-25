import { A_TASK } from "@utils/actions/TaskBoardAction";
import type { AppActionProps, TaskBoardStateProps } from "task-board-context";

export const reducer = (state: TaskBoardStateProps, action: AppActionProps): TaskBoardStateProps => {
  switch (action.type) {
    case A_TASK.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_TASK.SET_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case A_TASK.SET_TASK_BOARD:
      return { ...state, taskBoard: action.payload };
    case A_TASK.SET_TASK_BOARDS:
      return { ...state, taskBoards: action.payload };

    default:
      return state;
  }
};
