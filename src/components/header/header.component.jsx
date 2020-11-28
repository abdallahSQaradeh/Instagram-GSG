import React from "react";
import "./header.style.css";
import Logo from "../../assets/insta.png";
import Search from "./search/search.component";
import PersonInfo from "./person-info/person-info.component";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Camera" className="logo" />

      <Search />
      <PersonInfo />
    </div>
  );
}
