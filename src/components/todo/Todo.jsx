import React from "react";
import Cross from "../cross/Cross";
import "./todo.css";

function Todo({ todo, changeStatus }) {
  const { id, completed } = todo;
  return (
    <div className="todo">
      <input
        className="todo-check"
        type="checkbox"
        checked={completed}
        onChange={(e) => changeStatus(id)}
      />
      <p className={`todo-text ${completed ? "completed" : ""}`}>{todo.todo}</p>
      <button className="clickable">
        <Cross />
      </button>
    </div>
  );
}

export default Todo;
