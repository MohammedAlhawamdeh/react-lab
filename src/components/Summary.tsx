import type { Task } from "@/types/tasks";

type SummaryProps = {
  tasks: Task[];
};

const Summary = ({ tasks }: SummaryProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed);
  const remainingTasks = tasks.filter((task) => !task.completed);
  return (
    <ul>
      <li>Total tasks {totalTasks}</li>
      <li>Completed tasks {completedTasks.length}</li>
      <li>Remaining tasks {remainingTasks.length}</li>
    </ul>
  );
};

export default Summary;
