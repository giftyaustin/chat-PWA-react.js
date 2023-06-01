import React from "react";
import "./inputbox.css";

const InputBox = () => {
  return (
    <div className="InputBox">
      <div className="inputbox-h d-flex align-items-center">
        <div className="d-flex inp-atch-h">
          <input type="text" className="text-inp" placeholder="Reply to"/>
          <div className="atch-send-h d-flex">
          <button className="attachment-btn">&#x1F4CE;</button>
          <button className="send-btn">&#x27A4;</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default InputBox;
