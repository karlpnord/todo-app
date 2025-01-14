import { StateCreator } from 'zustand';
import { TaskStore, ToggleActions } from '../types';

export const createToggleActions: StateCreator<
  TaskStore,
  [],
  [],
  ToggleActions
> = (set) => ({
  toggleTaskImportant: (taskId) => set((state) => {
    // Update isImportant for the correct task in allTasks
    const updatedAllTasks = state.allTasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = { ...task, isImportant: !task.isImportant };
        return updatedTask;
      }
      return task;
    });

    // Find the updated task
    const updatedTask = updatedAllTasks.find(task => task.id === taskId);

    // If the updated task doesn't exist, return an empty object
    if (!updatedTask) {
      return {};
    }

    // If the updated task isImportant, add it to the isImportant list or remove it
    const updatedImportantTasks = updatedTask.isImportant
      ? [...state.importantTasks, updatedTask]
      : state.importantTasks.filter(task => task.id !== taskId);

    // Check if task exists in myDayTasks, if it does update the isImportant value
    const updatedMyDayTasks = state.myDayTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isImportant: updatedTask.isImportant };
      }
      return task;
    });

    // Update the isImportant value in activeTask if it exists
    const updatedActiveTask =
      state.activeTask?.id === taskId
        ? { ...state.activeTask, isImportant: updatedTask.isImportant }
        : state.activeTask;

    // Map through the customLists and each lists own task list, if task exists update isImportant
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
      // Update isCompleted for the correct task in allTasks
      const updatedAllTasks = state.allTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );

      // Find the updated task
      const updatedTask = updatedAllTasks.find((task) => task.id === taskId);

      // If the updated task doesn't exist, return an empty object
      if (!updatedTask) {
        return {};
      }

      // Map through importantTasks and update isCompleted if correct task is found
      const updatedImportantTasks = state.importantTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: updatedTask.isCompleted } : task
      );

      // Map through myDayTasks and update isCompleted if correct task is found
      const updatedMyDayTasks = state.myDayTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: updatedTask.isCompleted } : task
      );

      // Update the isCompleted value in activeTask if it exists
      const updatedActiveTask =
        state.activeTask?.id === taskId
          ? { ...state.activeTask, isCompleted: updatedTask.isCompleted }
          : state.activeTask;

      // Map through the customLists and each lists own task list, if task exists update isCompleted
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