/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Filter() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        <FontAwesomeIcon icon={faFilter} />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4"
      >
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default Filter;
