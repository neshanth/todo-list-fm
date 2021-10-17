import React from "react";
import "./count.css";

function Count({ todosCount }) {
  return (
    <div className="todolist-info">
      <p className="todo-count">{todosCount} items left</p>
    </div>
  );
}

export default Count;
