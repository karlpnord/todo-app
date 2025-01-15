import { useMemo } from 'react';

interface Task {
  isCompleted: boolean;
}

export const useProgressionCalculations = (tasks: Task[]) => {
  return useMemo(() => {
    const tasksCompleted = tasks.reduce((count, task) => {
      return task.isCompleted ? count + 1 : count;
    }, 0);

    const totalTasks = tasks.length;
    const completionPercentage = totalTasks > 0 ? (tasksCompleted / totalTasks) * 100 : 0;

    const totalCircumference = 2 * Math.PI * 16;
    const strokeDashoffset = totalCircumference - (completionPercentage / 100) * totalCircumference;

    return {
      tasksCompleted,
      totalTasks,
      completionPercentage,
      totalCircumference,
      strokeDashoffset,
    };
  }, [tasks]);
};
