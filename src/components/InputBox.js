import React from "react";
import "./inputbox.css";

const InputBox = () => {
  return (
    <div className="InputBox">
      <div className="inputbox-h d-flex align-items-center">
        <div className="d-flex inp-atch-h">
          <input type="text" className="text-inp" placeholder="Reply to"/>
          <div className="atch-send-h d-flex">
          <button className="attachment-btn"><img className="paperclip-icon" src={require('../images/paperclip.jpg')} alt="send" /></button>
          <button className="send-btn-h"><img className="send-btn" src={require('../images/send.png')} alt="" /></button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default InputBox;
