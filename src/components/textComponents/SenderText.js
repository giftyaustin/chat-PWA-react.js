import React from 'react'

const SenderText = ({text, image}) => {
   
  return (
    <div className="m-h d-flex" id='lazy-component'>
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
