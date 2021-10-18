import React from "react";
import "./filters.css";

function Filters({ changeFilter, filters }) {
  return (
    <>
      <div className="filters">
        <button
          className={`${
            filters === "All" ? "active" : ""
          } filter-link btn clickable`}
          onClick={() => changeFilter("All")}
        >
          All
        </button>
        <button
          className={`${
            filters === "Active" ? "active" : ""
          } filter-link btn clickable`}
          onClick={() => changeFilter("Active")}
        >
          Active
        </button>
        <button
          className={`${
            filters === "Completed" ? "active" : ""
          } filter-link btn clickable`}
          onClick={() => changeFilter("Completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
}

export default Filters;
