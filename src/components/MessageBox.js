import React, { useState, useEffect, useRef, useContext } from "react";
import "./messageBox.css";
import SenderText from "./textComponents/SenderText";
import OwnerText from "./textComponents/OwnerText";
import Time from "./textComponents/Time";
import { myContext } from "./context/Context";

const MessageBox = () => {
  const [chats, setChats] = useState([]);
  const { setFrom, setTo, setTrip , setDp} = useContext(myContext);
  const scrollableRef = useRef();
  

  const targetRef = useRef();
  const rootRef = useRef();
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    const response = await fetch(
      `https://qa.corider.in/assignment/chat?page=${page}`
    );
    const res = await response.json();
    if (page === 0) {
      setFrom(res.from);
      setTo(res.to);
      setTrip(res.name);
      setDp(res.chats.filter((c,i)=>i<4))
    }

    setChats([...chats, ...res.chats]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.count("render");
  const handleScroll = () => {
    const element = scrollableRef.current;
   
    if (element.scrollTop + element.scrollHeight - 1 < element.clientHeight) {
      setTimeout(() => {
        fetchData();
      }, 100);
    }
  };
  // useEffect(() => {
  //   console.log(prevDate);
  // }, [prevDate]);

  return (
    <div className="MessageBox" ref={rootRef}>
      <div
        className="message-box-h"
        ref={scrollableRef}
        onScroll={handleScroll}
      >
        {chats.length > 0 &&
          chats.map((c, i) => {
            const presentDate = new Date(c.time);
            
            let showDate = false;
            if(i!==0){
              const prevDate = new Date(chats[i-1].time)
              if(prevDate.getDate()!==presentDate.getDate()){
                showDate= true
              }

            }
            
            
            if (c.sender.self === true) {
            
              
              return (
                <div key={i}>
                   {showDate?<Time date= {presentDate.getDate()} month = {presentDate.toLocaleDateString("en-US", { month: "long" })}/>:""}
                <div
                  key={i}
                  value={i}
                  ref={i === chats.length - 1 ? targetRef : null}
                >
                  <OwnerText text={c.message} add={i} />
                </div></div>
              );
            } else {
              


              
             
              return (
                <div key={i}> 
                {showDate?<Time date= {presentDate.getDate()} month = {presentDate.toLocaleDateString("en-US", { month: "long" })}/>:""}
                <div 
                  
                  value={i}
                  ref={i === chats.length - 1 ? targetRef : null}
                >
                  {" "}
                  <SenderText text={c.message} image={c.sender.image} add={i} />
                </div></div>
              );
            }
            
          })}
      </div>
    </div>
  );
};

export default MessageBox;
