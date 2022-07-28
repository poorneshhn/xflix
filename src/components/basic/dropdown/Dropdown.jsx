import React from "react";
import "./dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown-ul">
        {props.dropdownList.map((item) => {
          return (
            <li
              onClick={(e) => props.setSelectedSortValue(item.label)}
              className="dropdown-filter-li"
              key={item.id}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
