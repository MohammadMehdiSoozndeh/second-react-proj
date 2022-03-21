import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Feb 7th at 14:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Feb 5th at 10:30",
      reminder: false,
    },
    {
      id: 3,
      text: "Task 3",
      day: "Feb 6th at 18:30",
      reminder: true,
    },
    {
      id: 4,
      text: "Task 4",
      day: "Feb 5th at 07:30",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
