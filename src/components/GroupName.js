import React from 'react'

const GroupName = ({name}) => {
  return (
    <div className='GroupName'>
        <div className='group-item-h d-flex'>
            <div className='grp-arrow-h d-flex align-items-center'>
            <div className='back-arrow d-flex'>
            <button className='back-h'><img className='back-btn' src={require('../images/backButton.png')} alt="" /></button>
            </div>
<div className='d-flex align-items-center grpName-text'>{name}</div>
            </div>
            <div className='note-sym d-flex align-items-center'><button className='edit-h'><img className='edit-image' src={require("../images/edit.png")} alt=""  /></button></div>
        </div>
    </div>
  )
}

export default GroupName
