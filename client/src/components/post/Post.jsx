import "./post.css";
import LazyLoad from "react-lazyload";
import { MoreVert } from "@material-ui/icons";
import PostComment from "../postComment/PostComment";
import { useState } from "react";


function Post({post}) {
  const year=post.date.slice(0,4);
  const month=post.date.slice(5,7);
  const day=post.date.slice(8,10);
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"]

  let [flag,setFlag] = useState(false);
  let [noComments,setnoComments] = useState(0);

  let showComments = ()=>{
    setFlag(!flag);
  }

  let commentCallback = (value)=>{
      setnoComments(value);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.userImg}
              alt="user_profile_img"
            />
            <span className="postUsername">{post.userName}</span>
            <span className="postDate">{`${day} ${months[month-1]} ${year}`}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          
          <img className="postImg" src={post.imgUrl} alt="post_img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like_img" />
            <span className="postLikeCounter">100</span>

            <img className="likeIcon" src="assets/heart.png" alt="love_img" />
            <span className="postLikeCounter">50</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={showComments}> {noComments} comments</span>
          </div>
        </div>
        {flag&&<PostComment post={post} callBack={commentCallback} />}
        
      </div>
    </div>
  );
}

export default Post;
