import "./post.css";
import { MoreVert } from "@material-ui/icons";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpg"
              alt="user_profile_img"
            />
            <span className="postUsername">Moin Malik</span>
            <span className="postDate">April 7 2022</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is my first post</span>
          <img className="postImg" src="/assets/ad.png" alt="post_img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like_img" />
            <span className="postLikeCounter">100</span>

            <img className="likeIcon" src="assets/heart.png" alt="love_img" />
            <span className="postLikeCounter">50</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
