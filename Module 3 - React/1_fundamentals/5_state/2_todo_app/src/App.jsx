import { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-container">
      <h1 className="title">📝 Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleTask(task.id)}>{task.title}</span>
            <div className="actions">
              <button className="check-btn" onClick={() => toggleTask(task.id)}>
                <FaCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tasks?.length === 0 && (
        <p className="empty-text">No tasks yet. Add one above! 🚀</p>
      )}
    </div>
  );
}
