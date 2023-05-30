import React from "react";

const FromTo = () => {
  return (
    <div className="FromTo">
      <div className="fromto-h">
        <div className="dp-h">
          <img
            src={require("../images/meme-logo.png")}
            alt="dp"
            className="grp-dp"
          />
        </div>
        <div className="from-to-name">
          <div className="from-text">
            From <span className="from-to-value p-1">IGI Airport T3</span>
          </div>
          <div className="to-name">
            to <span className="from-to-value p-1">Sector 28</span>
          </div>
        </div>
        <div className="three-dots-h">
        <button className="three-dots"> &#8942;</button></div>
      </div>
    </div>
  );
};

export default FromTo;
