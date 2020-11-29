import React from "react";
import "./stories.style.css";
import AddNewStory from "./add-new-story/add-new-story.component";
import RelevantStories from "./relevant-stories/relevent-stories.component";

export default function Stories(props) {
  return (
    <div className="stories">
      <AddNewStory />
      <RelevantStories />
    </div>
  );
}
