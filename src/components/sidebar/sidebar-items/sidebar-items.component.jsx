import React, { useState } from "react";
import "./sidebar-items.style.css";
import { AiFillHome, AiFillSetting, AiOutlinePoweroff } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { MdWifiTethering, MdNotifications } from "react-icons/md";
import SidebarItem from "./sidebar-item/sidebar-item.component";

export default function SidebarItems(props) {
  const [items] = useState([
    "Home",
    "Live",
    "Message",
    "Notifications",
    "Settings",
    "Logout",
  ]);
  const [itemsicons] = useState([
    AiFillHome,
    MdWifiTethering,
    BiMessage,
    MdNotifications,
    AiFillSetting,
    AiOutlinePoweroff,
  ]);

  return (
    <div className="sidebar-items">
      {items.map((item, idx) => {
        return (
          <SidebarItem
            key={item}
            itemTitle={item}
            ItemIcon={itemsicons[idx]}
            active={item === "Home"}
          />
        );
      })}
    </div>
  );
}
