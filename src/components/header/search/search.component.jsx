import React from "react";
import "./search.style.css";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Search(props) {
  return (
    <div className="search">
      <input type="search" name="search" placeholder="search" />
      <div className="search-icon">
        <BiSearchAlt2 />
      </div>
    </div>
  );
}
