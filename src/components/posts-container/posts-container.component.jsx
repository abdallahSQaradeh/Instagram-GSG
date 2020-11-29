import React from "react";
import "./posts-container.style.css";
import Posts from "./posts/posts.component";

export default function PostsContainer(props) {
  return (
    <div className="posts-container">
      <Posts />
    </div>
  );
}
