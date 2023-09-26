import { create } from 'zustand';

interface Task {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  status: string;
}

interface TaskStore {
  tasks: Task[];
  setTasks: (newTasks: Task[]) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
}));

export default useTaskStore;
