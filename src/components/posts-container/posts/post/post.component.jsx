import React from "react";
import "./post.style.css";
import PropTypes from "prop-types";
import PostHeader from "./post-header/post-header.component";
import PostFooter from "./post-footer/post-footer.component";

export default function Post(props) {
  const { name, profile, body, loc, id } = props;
  const idx = id.split("post");
  console.log(idx);
  return (
    <div className={`post ${Number(idx[1]) > 3 ? "m-top" : ""}`}>
      <PostHeader name={name} profile={profile} loc={loc} />
      <div className="post-body">
        <img src={body} alt="body" />
      </div>
      <PostFooter />
    </div>
  );
}
Post.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.elementType.isRequired,
  body: PropTypes.elementType.isRequired,
  loc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
