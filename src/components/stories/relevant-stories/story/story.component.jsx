import React from "react";
import "./story.style.css";
import PropTypes from "prop-types";

export default function Story(props) {
  const { tag1, tag2, src, tagPic } = props;
  return (
    <div className="story">
      <div className="story-images">
        <img src={src} alt="person of the story" className="person-img" />
        <img src={tagPic} alt={tag1} className="tags-img" />
      </div>

      <div className="story-tags">
        <div className="tag1">
          {`#`}
          {tag1}
        </div>
        <div className="tag2">
          {`#`}
          {tag2}
        </div>
      </div>
    </div>
  );
}

Story.propTypes = {
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  src: PropTypes.elementType.isRequired,
  tagPic: PropTypes.elementType.isRequired,
};
