import React, { useState, Suspense, useEffect, useRef } from "react";
import "./messageBox.css";
import SenderText from "./textComponents/SenderText";
import OwnerText from "./textComponents/OwnerText";
import Time from "./textComponents/Time";



const MessageBox = () => {
  let page = 0;
  const fetchData = async () => {
    const res = await fetch(`http://3.111.128.67/assignment/chat?page=${page}`);
    const response = await res.json();
    response.chats.forEach((c, i) => {
      sessionStorage.setItem("t" + i, JSON.stringify(c));
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rootRef = useRef();
  const targetRef = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
     
    },
    { root: rootRef.current, threshold: 1 }
  );
  if (targetRef.current) {
    observer.observe(targetRef.current);
  }

  const data = [];
  const renderTexts = () => {
    for (let i = 0; i <= 9; i++) {
      try {
        data.push(JSON.parse(sessionStorage.getItem("t" + i)));
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <>
        {data.map((c, i) => {
          if (c.sender.self === true) {
            return (
             
                <div ref={i === 9 ? targetRef : null}>
                  <OwnerText text={c.message} />
                </div>
              
            );
          } else {
            return (
              
                <div key={i} ref={i === 9 ? targetRef : null}>
                  <SenderText text={c.message} image={c.sender.image} />
                </div>
         
            );
          }
        })}
      </>
    );
  };

  console.count("rendered ");

  return (
    <div className="MessageBox" ref={rootRef}>
      <div className="message-box-h">{renderTexts()}</div>
    </div>
  );
};

export default MessageBox;
