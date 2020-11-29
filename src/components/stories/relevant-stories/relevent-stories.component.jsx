import React, { useState } from "react";
import "./relevant-story.style.css";
import Story from "./story/story.component";
import {
  imgP1,
  imgP2,
  imgP3,
  imgP4,
  imgTags1,
  imgTags2,
  imgTags3,
  imgTags4,
} from "./images";

export default function RelevantStories(props) {
  const [posts] = useState([
    {
      tag1: "Technology",
      tag2: "Android",
      id: "story-1",
      pic: imgP1,
      tagsPic: imgTags1,
    },
    {
      tag1: "Travels",
      tag2: "Airlines",
      id: "story-2",
      pic: imgP2,
      tagsPic: imgTags2,
    },
    {
      tag1: "Transport",
      tag2: "Truck",
      id: "story-3",
      pic: imgP3,
      tagsPic: imgTags3,
    },
    {
      tag1: "Travels",
      tag2: "Tours",
      id: "story-4",
      pic: imgP4,
      tagsPic: imgTags4,
    },
  ]);
  return (
    <div className="relevant-stories">
      {posts.map((story) => {
        return (
          <Story
            key={story.id}
            tag1={story.tag1}
            tag2={story.tag2}
            src={story.pic}
            tagPic={story.tagsPic}
          />
        );
      })}
    </div>
  );
}
