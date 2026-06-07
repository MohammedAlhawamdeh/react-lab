import type { Task } from "@/types/tasks";

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li>
      <span>{task.title}</span>
      <span>{task.completed ? "completed" : "not completed"}</span>
      <span>{task.priority}</span>
    </li>
  );
};
