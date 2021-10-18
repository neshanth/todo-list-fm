import React, { useContext } from "react";
import Filters from "../filters/Filters";
import Information from "../information/Information";
import Todo from "../todo/Todo";
import "./todocontainer.css";
import { AppContext } from "../../context";

function TodoContainer({
  todos,
  changeStatus,
  deleteTodo,
  todosCount,
  clearCompleted,
  changeFilter,
  filters,
}) {
  const darkTodo = useContext(AppContext);
  return (
    <>
      <div
        className={`todo-container ${
          darkTodo.theme === "Dark" ? "todo-container-dark" : ""
        } `}
      >
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
      <div
        className={`filters-container ${
          darkTodo.theme === "Dark" ? "filters-container-dark" : ""
        } `}
      >
        <Filters changeFilter={changeFilter} filters={filters} />
      </div>
    </>
  );
}

export default TodoContainer;
