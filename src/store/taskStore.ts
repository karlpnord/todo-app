import { create } from 'zustand';
import { Task } from '../types/types';

interface TaskStore {
  allTasks: Task[];
  importantTasks: Task[];
  myDayTasks: Task[];
  activeTask: Task | null;
  addTask: (task: Task) => void;
  addToMyDay: (task: Task) => void;
  setActiveTask: (task: Task) => void;
  clearActiveTask: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  allTasks: [],
  importantTasks: [],
  myDayTasks: [],
  activeTask: null,

  addTask: (task) => set((state) => ({ 
    allTasks: [...state.allTasks, task],
    importantTasks: task.isImportant
      ? [...state.importantTasks, task]
      : state.importantTasks,
  })),
  
  addToMyDay: (task) => set((state) => ({
    myDayTasks: [...state.myDayTasks, task],
    allTasks: [...state.allTasks, task],
  })),

  setActiveTask: (task) => set({ activeTask: task }),
  clearActiveTask: () => set({ activeTask: null }),
}));

export default useTaskStore;