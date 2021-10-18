import React from "react";
import "./filters.css";

function Filters({ changeFilter, filters }) {
  return (
    <div className="filters">
      <a
        className={`${filters === "All" ? "active" : ""} filter-link`}
        href="#"
        onClick={() => changeFilter("All")}
      >
        All
      </a>
      <a
        className={`${filters === "Active" ? "active" : ""} filter-link`}
        href="#"
        onClick={() => changeFilter("Active")}
      >
        Active
      </a>
      <a
        className={`${filters === "Completed" ? "active" : ""} filter-link`}
        href="#"
        onClick={() => changeFilter("Completed")}
      >
        Completed
      </a>
    </div>
  );
}

export default Filters;
