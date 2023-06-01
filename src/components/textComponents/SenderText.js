import React from 'react'

const SenderText = ({text, image , add}) => {
   
  return (
    <div className="m-h d-flex" >
          <div className="m-dp-h d-flex align-items-start">
            <div className="m-dp-img-h">
              <img src={image} alt="" className="m-dp" />
            </div>
          </div>
          <div className="m-text-h">
            <div className="m-text">{text}</div>
          </div>
        </div> 
  )
}

export default SenderText
