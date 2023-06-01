import React from "react";

const FromTo = ({from, to, dp}) => {
  return (
    <div className="FromTo">
      <div className="fromto-h">
        <div className="dp-h">


<div className="row w-100 m-0">
  <div className="col-6 p-0">  <img
            src={dp&&dp[0].sender.image}
            alt="dp"
            className="grp-dp"
          /></div>
  <div className="col-6 p-0">  <img
            src={dp&&dp[1].sender.image}
            alt="dp"
            className="grp-dp"
          /></div>
</div>
<div className="row w-100 m-0">
  <div className="col-6 p-0">  <img
            src={dp&&dp[2].sender.image}
            alt="dp"
            className="grp-dp"
          /></div>
  <div className="col-6 p-0">  <img
            src={dp&&dp[3].sender.image}
            alt="dp"
            className="grp-dp"
          /></div>
</div>


        </div>
        <div className="from-to-name">
          <div className="from-text">
            From <span className="from-to-value p-1">{from}</span>
          </div>
          <div className="to-name">
            to <span className="from-to-value p-1">{to}</span>
          </div>
        </div>
        <div className="three-dots-h">
        <button className="three-dots"> &#8942;</button></div>
      </div>
    </div>
  );
};

export default FromTo;
