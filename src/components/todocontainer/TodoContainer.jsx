import React from "react";
import Filters from "../filters/Filters";
import Information from "../information/Information";
import Todo from "../todo/Todo";

function TodoContainer() {
  return (
    <div className="todo-container">
      <Todo />
      <Information />
      <div className="filters-container">
        <Filters />
      </div>
    </div>
  );
}

export default TodoContainer;
