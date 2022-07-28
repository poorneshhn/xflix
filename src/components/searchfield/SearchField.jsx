import { Search } from "@material-ui/icons";
import React from "react";
import "./searchfield.css";

const SearchField = (props) => {
  return (
    <div className="search-container">
      <input
        placeholder="Search"
        className="search-input"
        type="search"
        name="search"
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
      <div className="search-icon">
        <Search />
      </div>
    </div>
  );
};

export default SearchField;
