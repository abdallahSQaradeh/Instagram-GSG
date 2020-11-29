import React from "react";
import "./add-new-story.style.css";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function AddNewStory(props) {
  return (
    <div className="add-new">
      <div className="add-new-icon">
        <AiOutlinePlusSquare />
      </div>
      <p>Add Story</p>
    </div>
  );
}
