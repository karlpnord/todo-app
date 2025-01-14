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
      // Map through the custom lists, if list exists add task to the list
      customLists: state.customLists.map((list) =>
        listId && list.id === listId
          ? { ...list, tasks: [...list.tasks, task] }
          : list
      ),

      // Add task to allTasks
      allTasks: [...state.allTasks, task],

      // If isImportant is true add task to importantTasks
      importantTasks: task.isImportant
        ? [...state.importantTasks, task]
        : state.importantTasks,
    })),
  
  addToMyDay: (task) => set((state) => ({
    // Add task to myDayTasks
    myDayTasks: [...state.myDayTasks, task],

    // Add task to allTasks
    allTasks: [...state.allTasks, task],
  })),

  deleteTask: (taskId) =>
    set((state) => {
      // Remove task in all static lists if it exists
      const updatedAllTasks = state.allTasks.filter((task) => task.id !== taskId);
      const updatedImportantTasks = state.importantTasks.filter((task) => task.id !== taskId);
      const updatedMyDayTasks = state.myDayTasks.filter((task) => task.id !== taskId);
    
      // Remove task from activeTask
      const updatedActiveTask = state.activeTask?.id === taskId ? null : state.activeTask;

      // Map through customlists and remove task from its corresponding task list if the task exists
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
      // Update task title in allTasks if the task exists
      const updatedAllTasks = state.allTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      // Update task title in importantTasks if the task exists
      const updatedImportantTasks = state.importantTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      // Update task title in myDayTasks if the task exists
      const updatedMyDayTasks = state.myDayTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    
      // Update task title in activeTask if the task exists
      const updatedActiveTask =
        state.activeTask?.id === taskId
          ? { ...state.activeTask, title: newTitle }
          : state.activeTask;

      // Map through customLists own tasklists and update task title if task exists
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