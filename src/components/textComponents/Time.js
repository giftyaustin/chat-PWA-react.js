import React from 'react'

const Time = ({date, month}) => {
  return (
    <div className="time-h">
    <div className="line"></div>
    <div className="time">{month} {date}</div>
    <div className="line"></div>
   
  </div>
  )
}

export default Time
