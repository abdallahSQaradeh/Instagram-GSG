import React from "react";
import "./sidebar.style.css";
import Logo from "./sidebar-logo/sidebar-logo.component";
import SideBarItems from "./sidebar-items/sidebar-items.component";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <Logo />
      <SideBarItems />
    </div>
  );
}
