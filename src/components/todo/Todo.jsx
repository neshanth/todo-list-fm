import React, { useState } from "react";
import Cross from "../cross/Cross";
import "./todo.css";
import { AppContext } from "../../context";
import { useContext } from "react/cjs/react.development";

function Todo({ todo, changeStatus, deleteTodo }) {
  const { id, completed } = todo;
  const darkTodo = useContext(AppContext);
  return (
    <div
      className={`todo ${darkTodo.theme === "Dark" ? "todo-dark-border" : ""}`}
    >
      <input
        className="todo-check"
        type="checkbox"
        checked={completed}
        onChange={(e) => changeStatus(id)}
      />
      <p
        className={`todo-text ${completed ? "completed" : ""} ${
          darkTodo.theme === "Dark" ? "todo-dark" : ""
        } ${darkTodo.theme === "Dark" && completed ? "dark-completed" : ""}`}
      >
        {todo.todo}
      </p>
      <button className="clickable delete-btn" onClick={() => deleteTodo(id)}>
        <Cross />
      </button>
    </div>
  );
}

export default Todo;
