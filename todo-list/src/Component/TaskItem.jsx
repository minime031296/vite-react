import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const { task, completed } = item;

  const handleDelete = () => {
    onDelete(item);
  };

  const toggleItem = () => {
    onToggle(item);
  };

  return (
    <div>
      <div style={{ color: completed ? "green" : "red" }}>{task}</div>
      <button onClick={toggleItem}>Toggle task</button>
      <button onClick={handleDelete}>Delete task</button>
    </div>
  );
}

export default TaskItem;
