import { Task, List } from '../types/types';

export interface TaskState {
  allTasks: Task[];
  importantTasks: Task[];
  myDayTasks: Task[];
  activeTask: Task | null;
  customLists: List[];
}

export interface ListActions {
  addList: (listName: string) => void;
  deleteList: (listId: string) => void;
  updateListName: (listId: string, listQuery: string) => void;
}

export interface TaskActions {
  addTask: (task: Task, listId: string | null) => void;
  addToMyDay: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTaskTitle: (taskId: string, newTitle: string) => void;
}

export interface ToggleActions {
  toggleTaskImportant: (taskId: string) => void;
  toggleTaskComplete: (taskId: string) => void;
}

export interface ActiveTaskActions {
  setActiveTask: (task: Task) => void;
  clearActiveTask: () => void;
}

export type TaskStore = TaskState & ListActions & TaskActions & ToggleActions & ActiveTaskActions;