import React from "react";
import "./Post.css";
import FaceIcon from "@mui/icons-material/Face";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import ReplyIcon from "@mui/icons-material/Reply";
import Avatar from "@mui/material/Avatar";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p> {description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={IosShareIcon} title="Share" color="gray" />
        <InputOption Icon={ReplyIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
