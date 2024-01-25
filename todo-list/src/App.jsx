import React, { useState } from "react";
import "./App.css";
import TaskItem from "./Component/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    const targetName = event.target.name;
    const targetValue =
      targetName === "completed" ? event.target.checked : event.target.value;

    setFormState({
      ...formState,
      [targetName]: targetValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      task: formState.task,
      completed: formState.completed,
      taskAssignedTo: formState.taskAssignedTo,
    };

    setTasks([...tasks, newTask]);

    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function handleDelete(item) {
    const updatedTasks = tasks.filter((t) => t !== item);
    setTasks(updatedTasks);
  }

  function handleToggle(item) {
    const updatedTasks = tasks.map((t) =>
      t === item ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            value={formState.task}
            onChange={handleChange}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select
            name="taskAssignedTo"
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
}

export default App;

