import React, { useContext } from "react";
import Input from "../input/Input";
import Moon from "../moon/Moon";
import Sun from "../sun/Sun";
import TodoContainer from "../todocontainer/TodoContainer";
import "./header.css";
import { AppContext } from "../../context";

function Header({
  todoInput,
  changeTodoInput,
  addTodo,
  todos,
  changeStatus,
  deleteTodo,
  todosCount,
  clearCompleted,
  changeFilter,
  filters,
}) {
  const data = useContext(AppContext);
  return (
    <header
      className={`${
        window.innerWidth < 780 && data.theme === "Dark"
          ? "header-banner-dark-mobile"
          : "header-banner-light-mobile"
      } ${
        window.innerWidth > 780 && data.theme === "Dark"
          ? "header-banner-dark-desktop"
          : "header-banner-light-desktop "
      } header-banner`}
    >
      <div className="container">
        <div className="logo-container">
          <h2>TODO</h2>
          {data.theme === "Dark" ? <Sun /> : <Moon />}
        </div>

        <Input
          todoInput={todoInput}
          changeTodoInput={changeTodoInput}
          addTodo={addTodo}
        />
        <TodoContainer
          todos={todos}
          changeStatus={changeStatus}
          deleteTodo={deleteTodo}
          todosCount={todosCount}
          clearCompleted={clearCompleted}
          changeFilter={changeFilter}
          filters={filters}
        />
      </div>
    </header>
  );
}

export default Header;
