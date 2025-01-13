import { StateCreator } from 'zustand';
import { ListActions, TaskStore } from '../types';

export const createListActions: StateCreator<
  TaskStore,
  [],
  [],
  ListActions
> = (set) => ({
  addList: (listName) => {
    const trimmed = listName.trim();

    if (trimmed === '') {
      return;
    }

    const newList = {
      id: crypto.randomUUID(),
      tasks: [],
      listName: trimmed,
    };

    set((state) => ({
      customLists: [...state.customLists, newList],
    }));
  },

  deleteList: (listId) =>
    set((state) => {
      const listToDelete = state.customLists.find((list) => list.id === listId);
      if (!listToDelete) return state;
  
      const tasksToDelete = listToDelete.tasks.map((task) => task.id);
  
      return {
        customLists: state.customLists.filter((list) => list.id !== listId),
        allTasks: state.allTasks.filter((task) => !tasksToDelete.includes(task.id)),
        importantTasks: state.importantTasks.filter((task) => !tasksToDelete.includes(task.id)),
      };
    }),
});