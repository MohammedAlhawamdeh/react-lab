import "./App.css";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import TasksList from "@/components/TasksList";
import type { Task } from "./types/tasks";

function App() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Review React components",
      completed: true,
      priority: "high",
    },
    {
      id: 2,
      title: "Build static task manager",
      completed: false,
      priority: "medium",
    },
    {
      id: 3,
      title: "Prepare interview talking points",
      completed: false,
      priority: "low",
    },
  ];
  return (
    <>
      <Header />
      <Summary tasks={tasks} />
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
