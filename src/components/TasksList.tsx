import { TaskItem } from "./TaskItem";
import EmptyState from "./EmptyState";
import type { Task } from "@/types/tasks";

export type TaskListProp = {
  tasks: Task[];
};

const TasksList = ({ tasks }: TaskListProp) => {
  return tasks.length > 0 ? (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  ) : (
    <EmptyState />
  );
};

export default TasksList;
