import "./videoplayer.css";
import LikeDislike from "../likedislike/LikeDislike";
import { useEffect, useState } from "react";
import { UPVOTE_DOWNVOTE_URL } from "../../constants/URLs";
import { axiosInstance } from "../../axiosbase/axiosBase";

let downVotePostRequestBody = {
  vote: "downVote",
  change: "decrease",
};
let upVotePostRequestBody = {
  vote: "upVote",
  change: "increase",
};

const VideoPlayer = (props) => {
  const [video, setVideo] = useState(props.video || {});

  const onLikeDislike = async (typeOfVote) => {
    let postBody =
      typeOfVote === "upVote" ? upVotePostRequestBody : downVotePostRequestBody;
    await axiosInstance.post(UPVOTE_DOWNVOTE_URL, postBody);
  };
  useEffect(() => {
    setVideo(props.video);
  }, [props.video]);

  return (
    <div className="videoplayer-container">
      <div className="iframe-container">
        <iframe
          title="Playing video"
          src={
            video.videoLink.includes("https://www.")
              ? video.videoLink
              : `https://www.${video.videoLink}`
          }
          className="iframe-element"
          frameBorder="0"
          style={{ height: "100%", position: "absolute" }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="desc-container-videoplayer">
        <div className="video-player-desc-container">
          <h2 className="desc-title">{video.title}</h2>
          <div className="content-rating-container">
            <p className="video-posted">{video.contentRating}</p>
            <div className="dot-video-player"></div>
            <p className="video-posted">{video.releaseDate}</p>
          </div>
        </div>
        <div>
          <LikeDislike
            onClickOnVoteButton={(val) => onLikeDislike(val)}
            upVotes={video.votes?.upVotes}
            downVotes={video.votes?.downVotes}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
