import { useEffect, useState } from "react";
import "./videotile.css";
const VideoTile = (props) => {
  const [item, setItem] = useState(props.item || []);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  return (
    <div className="videotile-container">
      <div className="video-image">
        <img src={item.previewImage} alt="" />
      </div>
      <div className="desc-container">
        <h3 className="video-title">{item.title}</h3>
        <p className="video-posted">{item.releaseDate}</p>
      </div>
    </div>
  );
};

export default VideoTile;
