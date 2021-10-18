import React, { useContext } from "react";
import Clear from "../button/Clear";
import Count from "../count/Count";
import "./information.css";
import { AppContext } from "../../context";

function Information({ todosCount, clearCompleted }) {
  const darkInformation = useContext(AppContext);
  return (
    <div
      className={`information-container ${
        darkInformation.theme === "Dark" ? "information-dark" : ""
      }`}
    >
      <Count todosCount={todosCount} />
      <Clear clearCompleted={clearCompleted} />
    </div>
  );
}

export default Information;
