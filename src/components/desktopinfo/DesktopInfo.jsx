import React from "react";
import Clear from "../button/Clear";
import Count from "../count/Count";
import Filters from "../filters/Filters";
import "./desktopinfo.css";

function DesktopInfo({ todosCount, changeFilter, filters, clearCompleted }) {
  return (
    <div className="desktop-info-component">
      <Count todosCount={todosCount} />
      <Filters changeFilter={changeFilter} filters={filters} />
      <Clear clearCompleted={clearCompleted} />
    </div>
  );
}

export default DesktopInfo;
