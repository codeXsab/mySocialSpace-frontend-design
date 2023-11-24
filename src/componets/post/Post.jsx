import { Link } from "react-router-dom";
import { useState } from "react";

import "./post.scss";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(true);
  const [displayComments, setDisplayComments] = useState(true);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <Link to={`/profile/${post.userID}`}>
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userID}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item likes">
            <button onClick={() => setIsLiked(!isLiked)}>
              {!isLiked ? (
                <FavoriteBorderOutlinedIcon />
              ) : (
                <FavoriteOutlinedIcon />
              )}
            </button>
            <span>120000 Likes</span>
          </div>
          <div className=" item comments">
            <button onClick={() => setDisplayComments(!displayComments)}>
              <TextsmsOutlinedIcon />
            </button>
            <span>comments</span>
          </div>
          <div className="item shares">
            <button>
              <ShareOutlinedIcon />
            </button>
            <span>shares</span>
          </div>
        </div>
        {displayComments && <Comments />}
      </div>
    </div>
  );
};
export default Post;
