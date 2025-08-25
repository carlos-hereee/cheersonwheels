import { createContext } from "react";
import type { TaskBoardSchema } from "task-board-context";

export const TaskBoardContext = createContext<TaskBoardSchema>({} as TaskBoardSchema);
