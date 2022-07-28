import LandingPage from "./pages/landingpage/LandingPage";
import VideoPlayPage from "./pages/videoplaypage/VideoPlayPage";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosbase/axiosBase";
import {
  ALL_VIDEOS,
  SORT_BY,
  SEARCH_GENRES_CONTENTRATING,
} from "./constants/URLs";

const appendFilterTypeToURL = (url, filterType, value) => {
  if (!Array.isArray(value)) throw new Error("Value is exprected to be array");

  let newUrl = url;
  if (newUrl[newUrl.length - 1] === "?") {
    newUrl = newUrl + filterType + "=";
  } else {
    newUrl = newUrl + "&" + filterType + "=";
  }

  value.map((item, index) => {
    if (item === "All Genre") {
      item = "All";
    } else if (item === "Any age group") {
      item = "All";
    }
    if (index === 0) {
      newUrl = newUrl + encodeURIComponent(item);
    } else {
      newUrl = newUrl + "," + encodeURIComponent(item);
    }
  });

  return newUrl;
};
// const debouncFunc = myDebounce((val) => callBack(val), 500);

const getLocalStorageItem = (key) => {
  let storedCurrentVideo = localStorage.getItem(key);
  if (storedCurrentVideo && storedCurrentVideo.length > 1) {
    storedCurrentVideo = JSON.parse(storedCurrentVideo);
    return storedCurrentVideo;
  } else {
    return {};
  }
};

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [currentVideo, setCurrentVideo] = useState(
    getLocalStorageItem("currentVideo")
  );
  const [currentSortType, setCurrentSortType] = useState("");
  const [selectedGenreFilter, setSelectedGenreFilter] = useState([]);
  const [selectedContentRatingFilter, setSelectedContentRatingFilter] =
    useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSortTypeChange = async (val) => {
    setCurrentSortType(val);
    let url = "";
    if (val === "Release Date") {
      url = `${SORT_BY}releaseDate`;
    } else if (val === "View Count") {
      url = `${SORT_BY}viewCount`;
    } else {
      url = ALL_VIDEOS;
    }
    const res = await axiosInstance.get(url);
    setVideoList(res.data.videos);
  };

  const handleChange = (val) => {
    setSearchValue(val);
  };
  useEffect(() => {
    (async () => {
      const res = await axiosInstance.get(ALL_VIDEOS);
      setVideoList(res.data.videos);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let url = SEARCH_GENRES_CONTENTRATING;
      if (searchValue.length > 0) {
        url = appendFilterTypeToURL(SEARCH_GENRES_CONTENTRATING, "title", [
          searchValue,
        ]);
      }
      if (
        selectedGenreFilter.length > 0 &&
        selectedContentRatingFilter.length === 1
      ) {
        url = appendFilterTypeToURL(url, "genres", selectedGenreFilter);
        url = appendFilterTypeToURL(
          url,
          "contentRating",
          selectedContentRatingFilter
        );
      } else if (
        selectedGenreFilter.length === 0 &&
        selectedContentRatingFilter[0] === "Any age group"
      ) {
        url = appendFilterTypeToURL(url, "genres", ["All"]);
      } else if (selectedContentRatingFilter.length === 1) {
        url = appendFilterTypeToURL(
          url,
          "contentRating",
          selectedContentRatingFilter
        );
      }

      const res = await axiosInstance.get(url);
      setVideoList(res.data.videos);
    })();
  }, [selectedGenreFilter, selectedContentRatingFilter, searchValue]);

  useEffect(() => {
    if (videoList.length > 0) {
      videoList.map((item) => {
        if (item._id === selectedVideoId) {
          setCurrentVideo(item);
          localStorage.setItem("currentVideo", JSON.stringify(item));
        }
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedVideoId]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              setCurrentSortType={handleSortTypeChange}
              videoList={videoList}
              currentVideo={currentVideo}
              setSelectedGenreFilter={setSelectedGenreFilter}
              setSelectedContentRatingFilter={setSelectedContentRatingFilter}
              setSearchValue={handleChange}
            />
          }
        />
        <Route
          path="/video/:id"
          element={
            <VideoPlayPage
              setSelectedVideoId={setSelectedVideoId}
              videoList={videoList}
              currentVideo={currentVideo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
