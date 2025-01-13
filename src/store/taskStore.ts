import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Task, List } from '../types/types';

interface TaskStore {
  allTasks: Task[];
  importantTasks: Task[];
  myDayTasks: Task[];
  activeTask: Task | null;
  customLists: List[];
  
  addList: (listName: string) => void;
  deleteList: (listId: string) => void;
  addTask: (task: Task, listId: string | null) => void;
  addToMyDay: (task: Task) => void;
  setActiveTask: (task: Task) => void;
  clearActiveTask: () => void;
  toggleTaskImportant: (taskId: string) => void;
  toggleTaskComplete: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  updateTaskTitle: (taskId: string, newTitle: string) => void;
}

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      allTasks: [],
      importantTasks: [],
      myDayTasks: [],
      activeTask: null,
      customLists: [],

      addList: (listName) => {
        const trimmed = listName.trim();

        if (trimmed === '') {
          return;
        }

        const newList: List = {
          id: crypto.randomUUID(),
          tasks: [],
          listName: trimmed,
        };

        set((state) => ({
          customLists: [...state.customLists, newList],
        }));
      },

      deleteList: (listId: string) =>
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

      setActiveTask: (task) => set({ activeTask: task }),
      clearActiveTask: () => set({ activeTask: null }),
    }),
    {
      name: 'tasks-list-storage',
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