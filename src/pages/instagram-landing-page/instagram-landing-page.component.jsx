import React from "react";
import "./instagram-landing-page.style.css";
import Sidebar from "../../components/sidebar/sidebar.component";
import Header from "../../components/header/header.component";
import Stories from "../../components/stories/stories.component";

export default function Instagram(props) {
  return (
    <div className="instagram-container">
      <Sidebar />
      <div className="profile-container">
        <Header />
        <Stories />
      </div>
    </div>
  );
}