import React from "react";
import "./post-header.style.css";
import PropTypes from "prop-types";
import { AiOutlineMore } from "react-icons/ai";

export default function PostHeader(props) {
  const { name, loc, profile } = props;
  return (
    <div className="post-header">
      <div className="h-person-info">
        <div
          style={{
            backgroundImage: `url(${profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-person-img"
        />

        <div className="h-person-name-loc">
          <div className="h-person-name">{name}</div>
          <div className="h-person-loc">{loc}</div>
        </div>
      </div>
      <div className="more">
        <AiOutlineMore />
      </div>
    </div>
  );
}
PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  profile: PropTypes.elementType.isRequired,
};
