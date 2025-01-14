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

    // Check string is not empty
    if (trimmed === '') {
      return;
    }

    // Create new list item with trimmed string
    const newList = {
      id: crypto.randomUUID(),
      tasks: [],
      listName: trimmed,
    };

    // Add list to customLists array
    set((state) => ({
      customLists: [...state.customLists, newList],
    }));
  },

  deleteList: (listId) =>
    set((state) => {
      // Find correct list to delete in the customLists
      const listToDelete = state.customLists.find((list) => list.id === listId);
      
      // Early return if no list to delete is found
      if (!listToDelete) return state;
  
      // Extract the id's of all tasks in the list that will be deleted
      const tasksToDelete = listToDelete.tasks.map((task) => task.id);
  
      return {
        // Filter out the listToDelete in the customLists array
        customLists: state.customLists.filter((list) => list.id !== listId),

        // Remove all tasks in allTasks with corresponding taskid as tasks in tasksToDelete
        allTasks: state.allTasks.filter((task) => !tasksToDelete.includes(task.id)),

        // Remove all tasks in importantTasks with corresponding taskid as tasks in tasksToDelete
        importantTasks: state.importantTasks.filter((task) => !tasksToDelete.includes(task.id)),
      };
    }),
});