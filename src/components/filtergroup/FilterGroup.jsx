import { ImportExport } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { SORT_BY_VALUES } from "../../constants/sortConstant";
import Dropdown from "../basic/dropdown/Dropdown";
import "./filtergroup.css";

const checkForValueInArray = (array, value) => {
  return Array.isArray(array) && array.includes(value);
};

const FilterGroup = (props) => {
  const [selectedSortValue, setSelectedSortValue] = useState("Release Date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.setCurrentSortType !== null) {
      props.setCurrentSortType(selectedSortValue);
    }
  }, [selectedSortValue]);

  const handleSortDropdown = () => {
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  };
  return (
    <div className="filtergroup-container">
      <ul className="filter-ul">
        {props.filterOptions.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              props.handleClickOnFilterLables(item.label);
            }}
            className={
              "filter-li " +
              (checkForValueInArray(props.selectedFilters, item.label)
                ? "selected"
                : "")
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
      {props.showSortButton && (
        <ul
          className="filter-ul sort-button-filter"
          onClick={handleSortDropdown}
        >
          <li className="filter-li selected">
            <ImportExport /> Sort By: {selectedSortValue}
          </li>
          {show && (
            <div className="dropdown-sort-container">
              <Dropdown
                dropdownList={SORT_BY_VALUES}
                setSelectedSortValue={setSelectedSortValue}
              />
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterGroup;
