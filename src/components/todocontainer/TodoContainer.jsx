import React from "react";
import Filters from "../filters/Filters";
import Information from "../information/Information";
import Todo from "../todo/Todo";
import "./todocontainer.css";

function TodoContainer({ todos, changeStatus }) {
  return (
    <>
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} changeStatus={changeStatus} />
        ))}
        <Information />
      </div>
      <div className="filters-container">
        <Filters />
      </div>
    </>
  );
}

export default TodoContainer;
