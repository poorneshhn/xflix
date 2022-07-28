import "./likedislike.css";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import React from "react";

const LikeDislike = (props) => {
  const onClick = (val) => {
    props.onClickOnVoteButton(val);
  };
  return (
    <div className="custom-likedislike-container">
      <div className="like-button" onClick={() => onClick("upVote")}>
        <ThumbUp />
        <span>{props.upVotes}</span>
      </div>

      <div className="dislike-button" onClick={() => onClick("downVote")}>
        <ThumbDown />
        <span>{props.downVotes}</span>
      </div>
    </div>
  );
};

export default React.memo(LikeDislike);
