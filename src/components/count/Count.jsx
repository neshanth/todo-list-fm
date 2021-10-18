import React from "react";
import "./count.css";

function Count({ todosCount }) {
  return (
    <div className="todolist-info">
      <p className="todo-count">
        {todosCount} {`${todosCount > 1 || todosCount < 1 ? "items" : "item"}`}{" "}
        left
      </p>
    </div>
  );
}

export default Count;
