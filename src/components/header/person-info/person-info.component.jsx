import React from "react";
import "./person-info.style.css";
import ProfilePic from "../../../assets/emma-watson.jfif";

export default function PersonInfo(props) {
  return (
    <div className="person-info">
      <img src={ProfilePic} alt="Emma Watson" className="profile-img" />
      <div className="person-name-job-loc">
        <div className="person-name">Emma Watson</div>
        <div className="person-job">Actress, Model</div>
        <div className="person-loc">Paris, French</div>
      </div>
    </div>
  );
}
