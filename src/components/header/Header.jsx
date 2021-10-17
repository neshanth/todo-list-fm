import React from "react";
import Input from "../input/Input";
import Moon from "../moon/Moon";
import TodoContainer from "../todocontainer/TodoContainer";
import "./header.css";

function Header({ todoInput, changeTodoInput, addTodo, todos, changeStatus }) {
  return (
    <header className="header-banner">
      <div className="container">
        <div className="logo-container">
          <h2>TODO</h2>
          <Moon />
        </div>

        <Input
          todoInput={todoInput}
          changeTodoInput={changeTodoInput}
          addTodo={addTodo}
        />
        <TodoContainer todos={todos} changeStatus={changeStatus} />
      </div>
    </header>
  );
}

export default Header;
