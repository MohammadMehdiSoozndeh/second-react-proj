import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const togggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togggleReminder} />
      ) : (
        "no tasks"
      )}
    </div>
  );
}

export default App;
