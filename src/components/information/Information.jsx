import React from "react";
import Clear from "../button/Clear";
import Count from "../count/Count";
import "./information.css";

function Information({ todosCount }) {
  return (
    <div className="information-container">
      <Count todosCount={todosCount} />
      <Clear />
    </div>
  );
}

export default Information;
