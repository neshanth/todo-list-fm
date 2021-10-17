import React from "react";
import "./clear.css";

function Clear({ clearCompleted }) {
  return (
    <button className="clear-btn" onClick={clearCompleted}>
      Clear Completed
    </button>
  );
}

export default Clear;
