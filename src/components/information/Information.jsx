import React from "react";
import Clear from "../button/Clear";
import Count from "../count/Count";
import "./information.css";

function Information({ todosCount, clearCompleted }) {
  return (
    <div className="information-container">
      <Count todosCount={todosCount} />
      <Clear clearCompleted={clearCompleted} />
    </div>
  );
}

export default Information;
