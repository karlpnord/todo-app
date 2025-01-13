import { StateCreator } from 'zustand';
import { TaskStore, TaskActions } from '../types';

export const createTaskActions: StateCreator<
  TaskStore,
  [],
  [],
  TaskActions
> = (set) => ({
  addTask: (task, listId = null) =>
    set((state) => ({
      customLists: state.customLists.map((list) =>
        listId && list.id === listId
          ? { ...list, tasks: [...list.tasks, task] }
          : list
      ),
      allTasks: [...state.allTasks, task],
      importantTasks: task.isImportant
        ? [...state.importantTasks, task]
        : state.importantTasks,
    })),
  
  addToMyDay: (task) => set((state) => ({
    myDayTasks: [...state.myDayTasks, task],
    allTasks: [...state.allTasks, task],
  })),

  deleteTask: (taskId) =>
    set((state) => {
      const updatedAllTasks = state.allTasks.filter((task) => task.id !== taskId);
      const updatedImportantTasks = state.importantTasks.filter((task) => task.id !== taskId);
      const updatedMyDayTasks = state.myDayTasks.filter((task) => task.id !== taskId);
    
      const updatedActiveTask = state.activeTask?.id === taskId ? null : state.activeTask;

      const updatedCustomLists = state.customLists.map((list) => ({
        ...list,
        tasks: list.tasks.filter((task) => task.id !== taskId),
      }));
    
      return {
        allTasks: updatedAllTasks,
        importantTasks: updatedImportantTasks,
        myDayTasks: updatedMyDayTasks,
        activeTask: updatedActiveTask,
        customLists: updatedCustomLists,
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

      const updatedCustomLists = state.customLists.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId ? { ...task, title: newTitle } : task
        ),
      }));
    
      return {
        allTasks: updatedAllTasks,
        importantTasks: updatedImportantTasks,
        myDayTasks: updatedMyDayTasks,
        activeTask: updatedActiveTask,
        customLists: updatedCustomLists,
      };
    }),
});