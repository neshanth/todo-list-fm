import React, { useContext } from "react";
import "./input.css";
import check from "../../images/icon-check.svg";
import { AppContext } from "../../context";

function Input({ todoInput, changeTodoInput, addTodo }) {
  const darkInput = useContext(AppContext);
  return (
    <div className="todo-input-container">
      <label htmlFor="todo" className="todo-label">
        <input type="radio" name="todo" className="todo-radio-submit" />
        <img className="check-icon" src={check} alt="check" />
      </label>

      <input
        type="text"
        value={todoInput}
        className={`todo-input ${
          darkInput.theme === "Dark" ? "todo-input-dark" : ""
        }`}
        placeholder="Create a new todo.."
        onChange={changeTodoInput}
        onKeyPress={addTodo}
      />
    </div>
  );
}

export default Input;
