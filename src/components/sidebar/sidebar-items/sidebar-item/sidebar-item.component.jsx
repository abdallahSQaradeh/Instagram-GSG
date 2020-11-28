import React from "react";
import PropTypes from "prop-types";
import "./sidebar-item.style.css";

export default function SidebarItem(props) {
  const { itemTitle, ItemIcon, active } = props;
  return (
    <div className={`sidebar-item ${active ? "active-item" : ""}`}>
      <div className="item-icon">
        <ItemIcon />
      </div>
      <div className="item-title">{itemTitle}</div>
    </div>
  );
}

SidebarItem.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  ItemIcon: PropTypes.elementType.isRequired,
  active: PropTypes.bool,
};
SidebarItem.defaultProps = {
  active: false,
};
