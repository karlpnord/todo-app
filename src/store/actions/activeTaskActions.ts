import { StateCreator } from 'zustand';
import { TaskStore, ActiveTaskActions } from '../types';
import { Task } from '../../types/types';

export const createActiveTaskActions: StateCreator<
  TaskStore,
  [],
  [],
  ActiveTaskActions
> = (set) => ({
  // Set task as active
  setActiveTask: (task: Task) => set({ activeTask: task }),

  // Empty the active task
  clearActiveTask: () => set({ activeTask: null }),
});