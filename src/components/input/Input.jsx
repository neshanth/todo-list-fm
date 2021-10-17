import React from "react";
import "./input.css";
import check from "../../images/icon-check.svg";

function Input() {
  return (
    <div className="todo-input-container">
      <label htmlFor="todo" className="todo-label">
        <input type="radio" name="todo" className="todo-radio-submit" />
        <img className="check-icon" src={check} />
      </label>

      <input
        type="text"
        value=""
        className="todo-input"
        placeholder="Create a new todo.."
      />
    </div>
  );
}

export default Input;
