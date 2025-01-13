import { StateCreator } from 'zustand';
import { TaskStore, ActiveTaskActions } from '../types';
import { Task } from '../../types/types';

export const createActiveTaskActions: StateCreator<
  TaskStore,
  [],
  [],
  ActiveTaskActions
> = (set) => ({
  setActiveTask: (task: Task) => set({ activeTask: task }),
  clearActiveTask: () => set({ activeTask: null }),
});