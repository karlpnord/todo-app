import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TaskStore } from './types';
import { createListActions } from './actions/listActions';
import { createTaskActions } from './actions/taskActions';
import { createToggleActions } from './actions/toggleActions';
import { createActiveTaskActions } from './actions/activeTaskActions';

const useTaskStore = create<TaskStore>()(
  persist(
    (...a) => ({
      allTasks: [],
      importantTasks: [],
      myDayTasks: [],
      activeTask: null,
      customLists: [],
      
      ...createListActions(...a),
      ...createTaskActions(...a),
      ...createToggleActions(...a),
      ...createActiveTaskActions(...a),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        allTasks: state.allTasks,
        importantTasks: state.importantTasks,
        myDayTasks: state.myDayTasks,
        customLists: state.customLists,
      }),
    }
  )
);

export default useTaskStore;