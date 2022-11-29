import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useDispatch } from "react-redux";
// useSelector;
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
// selectUser;

function Header() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedin"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right"></div>
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisedUserCircleIcon} title="My Network" />
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatBubbleOutlineIcon} title="Chat" />
      <HeaderOption Icon={CircleNotificationsIcon} title="Notifications" />
      <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
    </div>
  );
}

export default Header;
