import { StateCreator } from 'zustand';
import { TaskStore, ToggleActions } from '../types';

export const createToggleActions: StateCreator<
  TaskStore,
  [],
  [],
  ToggleActions
> = (set) => ({
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

    const updatedCustomLists = state.customLists.map((list) => ({
      ...list,
      tasks: list.tasks.map((task) =>
        task.id === taskId
          ? { ...task, isImportant: updatedTask.isImportant }
          : task
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

      const updatedCustomLists = state.customLists.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) =>
          task.id === taskId
            ? { ...task, isCompleted: updatedTask.isCompleted }
            : task
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