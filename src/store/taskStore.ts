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
  toggleTaskImportant: (taskId: string) => void;
  toggleTaskComplete: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  updateTaskTitle: (taskId: string, newTitle: string) => void;
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

  toggleTaskImportant: (taskId) => set((state) => {
    const updatedAllTasks = state.allTasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, isImportant: !task.isImportant };
        return updatedTask;
      }
      return task;
    });

    const updatedTask = updatedAllTasks.find(task => task.id === taskId);

    if (!updatedTask) {
      return {};
    }

    const updatedImportantTasks = updatedTask.isImportant
      ? [...state.importantTasks, updatedTask]
      : state.importantTasks.filter(task => task.id !== taskId);

    const updatedMyDayTasks = state.myDayTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isImportant: updatedTask.isImportant };
      }
      return task;
    });

    const updatedActiveTask =
      state.activeTask?.id === taskId
        ? { ...state.activeTask, isImportant: updatedTask.isImportant }
        : state.activeTask;

    return {
      allTasks: updatedAllTasks,
      importantTasks: updatedImportantTasks,
      myDayTasks: updatedMyDayTasks,
      activeTask: updatedActiveTask,
    };
  }),

  toggleTaskComplete: (taskId) =>
    set((state) => {
      const updatedAllTasks = state.allTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );

      const updatedTask = updatedAllTasks.find((task) => task.id === taskId);

      if (!updatedTask) {
        return {};
      }

      const updatedImportantTasks = state.importantTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: updatedTask.isCompleted } : task
      );

      const updatedMyDayTasks = state.myDayTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: updatedTask.isCompleted } : task
      );

      const updatedActiveTask =
      state.activeTask?.id === taskId
        ? { ...state.activeTask, isCompleted: updatedTask.isCompleted }
        : state.activeTask;

      return {
        allTasks: updatedAllTasks,
        importantTasks: updatedImportantTasks,
        myDayTasks: updatedMyDayTasks,
        activeTask: updatedActiveTask,
      };
    }),

  deleteTask: (taskId) =>
    set((state) => {
      const updatedAllTasks = state.allTasks.filter((task) => task.id !== taskId);
      const updatedImportantTasks = state.importantTasks.filter((task) => task.id !== taskId);
      const updatedMyDayTasks = state.myDayTasks.filter((task) => task.id !== taskId);
    
      const updatedActiveTask = state.activeTask?.id === taskId ? null : state.activeTask;
    
      return {
        allTasks: updatedAllTasks,
        importantTasks: updatedImportantTasks,
        myDayTasks: updatedMyDayTasks,
        activeTask: updatedActiveTask,
      };
    }),

  updateTaskTitle: (taskId, newTitle) =>
    set((state) => {
      const updatedAllTasks = state.allTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      const updatedImportantTasks = state.importantTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      const updatedMyDayTasks = state.myDayTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      const updatedActiveTask =
          state.activeTask?.id === taskId
            ? { ...state.activeTask, title: newTitle }
            : state.activeTask;
    
      return {
        allTasks: updatedAllTasks,
        importantTasks: updatedImportantTasks,
        myDayTasks: updatedMyDayTasks,
        activeTask: updatedActiveTask,
      };
    }),

  setActiveTask: (task) => set({ activeTask: task }),
  clearActiveTask: () => set({ activeTask: null }),
}));

export default useTaskStore;