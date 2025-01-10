import { create } from 'zustand';
import { Task } from '../types/types';

interface TaskStore {
  allTasks: Task[];
  importantTasks: Task[];
  myDayTasks: Task[];
  addTask: (task: Task) => void;
  addToMyDay: (task: Task) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  allTasks: [],
  importantTasks: [],
  myDayTasks: [],

  addTask: (task) => set((state) => ({ 
    allTasks: [...state.allTasks, task],
    importantTasks: task.isImportant
      ? [...state.importantTasks, task]
      : state.importantTasks,
  })),
  
  addToMyDay: (task) => set((state) => ({
    myDayTasks: [...state.myDayTasks, task],
    allTasks: [...state.allTasks, task],
  }))
}));

export default useTaskStore;