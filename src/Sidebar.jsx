import React from "react";
import "./Sidebar.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/id/1291199071/vector/warm-to-cool-abstract-layered-wavy-background.jpg?s=612x612&w=0&k=20&c=ntRPfcqWkNjIu6XeeNyGxSNZb1Bo4rwYiiFM1NAEAE0="
          alt="img"
        />
        <AccountBoxIcon className="sidebar__avatar" />
        {/* <Avatar className="sidebar__avatar" /> */}

        <h2>Jane Doe</h2>
        <h4>jane.doe@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3,333</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,433</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
