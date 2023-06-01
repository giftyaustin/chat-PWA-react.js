import React from 'react'
import GroupName from './GroupName'
import FromTo from './FromTo'
import MessageBox from './MessageBox'
import InputBox from './InputBox'

const Outline = () => {
  return (
    <div className='outline'>
      <GroupName/>
      <FromTo/>
     <MessageBox/>
      
      <InputBox/>
    </div>
  )
}

export default Outline
