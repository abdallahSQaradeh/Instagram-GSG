import React from "react";
import "./post-footer.style.css";

import { BiMessage } from "react-icons/bi";
import { FiNavigation } from "react-icons/fi";
import { ImBookmark, ImHeart } from "react-icons/im";

export default function PostFooter() {
  return (
    <div className="post-footer">
      <div className="post-reaction">
        <div className="heart">
          <ImHeart />
        </div>
        <div className="message">
          <BiMessage />
        </div>
        <div className="send">
          <FiNavigation />
        </div>
      </div>
      <div className="post-save">
        <ImBookmark />
      </div>
    </div>
  );
}
