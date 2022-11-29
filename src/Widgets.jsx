import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Why people hate react", "Top news - 9099 readers")}
      {newsArticle(
        "10,000 cases of react-sickness",
        "Top news - 19009 readers"
      )}
      {newsArticle("REACT - new covid?", "Top news - 9020 readers")}
      {newsArticle(
        "Is that a flue or the react virus",
        "Top news - 91099 readers"
      )}
      {newsArticle(
        "Shooting at software house - people went crazy from the react ",
        "Top news - 90919 readers"
      )}
      {newsArticle(
        "How to tell the difference between zombies and people learning react",
        "Top news - 109099 readers"
      )}
    </div>
  );
}

export default Widgets;
