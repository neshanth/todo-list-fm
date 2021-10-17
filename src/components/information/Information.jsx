import React from "react";
import Clear from "../button/Clear";
import Count from "../count/Count";
import "./information.css";

function Information() {
  return (
    <div className="information-container">
      <Count />
      <Clear />
    </div>
  );
}

export default Information;
