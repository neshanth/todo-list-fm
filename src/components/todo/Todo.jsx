import React from "react";
import Cross from "../cross/Cross";
import "./todo.css";
import { AppContext } from "../../context";
import { useContext } from "react";

function Todo({ todo, changeStatus, deleteTodo }) {
  const { id, Completed, TodoItem } = todo;
  const darkTodo = useContext(AppContext);

  return (
    <div
      className={`todo ${darkTodo.theme === "Dark" ? "todo-dark-border" : ""}`}
    >
      <input
        className="todo-check"
        type="checkbox"
        checked={Completed}
        onChange={(e) => changeStatus(id, e)}
      />
      <p
        className={`todo-text ${Completed ? "completed" : ""} ${
          darkTodo.theme === "Dark" ? "todo-dark" : ""
        } ${darkTodo.theme === "Dark" && Completed ? "dark-completed" : ""}`}
      >
        {TodoItem}
      </p>
      <button className="clickable delete-btn" onClick={() => deleteTodo(id)}>
        <Cross />
      </button>
    </div>
  );
}

export default Todo;
