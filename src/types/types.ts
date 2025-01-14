export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: Date;
}

export interface List {
  id: string;
  tasks: Task[];
  listName: string;
}