import React from "react";
import Filters from "../filters/Filters";
import Information from "../information/Information";
import Todo from "../todo/Todo";
import "./todocontainer.css";

function TodoContainer({
  todos,
  changeStatus,
  deleteTodo,
  todosCount,
  clearCompleted,
}) {
  return (
    <>
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
            deleteTodo={deleteTodo}
          />
        ))}
        <Information todosCount={todosCount} clearCompleted={clearCompleted} />
      </div>
      <div className="filters-container">
        <Filters />
      </div>
    </>
  );
}

export default TodoContainer;
