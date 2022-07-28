import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoTile from "../videotile/VideoTile";
import "./videolist.css";
const VideoList = (props) => {
  const [videos, setVideos] = useState(props.list || []);

  useEffect(() => {
    setVideos(props.list);
  }, [props.list]);

  return (
    <div className="videolist-container">
      {videos &&
        videos.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={item._id}
              to={`/video/${item._id}`}
            >
              <VideoTile item={item} />;
            </Link>
          );
        })}
    </div>
  );
};

export default VideoList;
