import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import SearchField from "../searchfield/SearchField";
import "./header.css";
import VideoUpload from "../videoupload/VideoUpload";
import FilterGroup from "../filtergroup/FilterGroup";
import {
  FILTER_BY_AGE,
  FILTER_BY_CATEGORY,
} from "../../constants/filterConstants";
const Header = (props) => {
  const [selectedGenre, setSelectedGenre] = useState(["All Genre"]);
  const [selectedContentRating, setSelectedContentRating] = useState([
    "Any age group",
  ]);

  useEffect(() => {
    if (props.setSelectedGenreFilter) {
      props.setSelectedGenreFilter(selectedGenre);
    }
  }, [selectedGenre]);

  useEffect(() => {
    if (props.setSelectedContentRatingFilter) {
      props.setSelectedContentRatingFilter(selectedContentRating);
    }
  }, [selectedContentRating]);

  const handleGenreSelection = (value) => {
    if (selectedGenre.includes(value)) {
      let list = selectedGenre.filter((item) => item !== value);
      setSelectedGenre(list);
    } else {
      setSelectedGenre([...selectedGenre, value]);
    }
  };

  const handleContentRatingSelection = (value) => {
    setSelectedContentRating([value]);
  };

  return (
    <div className="header-container">
      <div className="header-first">
        <Logo />
        {props.showSearchComponent && (
          <SearchField setSearchValue={props.setSearchValue} />
        )}
        {props.showUploadFileComponent && <VideoUpload />}
      </div>
      <div className="header-second">
        {props.showFilterByCategory && (
          <FilterGroup
            setSelectedGenre={setSelectedGenre}
            setCurrentSortType={props.setCurrentSortType}
            filterOptions={FILTER_BY_CATEGORY}
            showSortButton={true}
            filterType="genre"
            handleClickOnFilterLables={handleGenreSelection}
            selectedFilters={selectedGenre}
          />
        )}
        {props.showFilterByAge && (
          <FilterGroup
            setCurrentSortType={null}
            filterOptions={FILTER_BY_AGE}
            showSortButton={false}
            filterType="contentRating"
            handleClickOnFilterLables={handleContentRatingSelection}
            selectedFilters={selectedContentRating}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
