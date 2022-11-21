import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="image"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisedUserCircleIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatBubbleOutlineIcon} title="Chat" />
      <HeaderOption Icon={CircleNotificationsIcon} title="Notifications" />
      <HeaderOption
        avatar="https://cdn.create.vista.com/api/media/small/56695433/stock-vector-female-avatar"
        title="me"
      />
    </div>
  );
}

export default Header;
