import React , {useState} from 'react'
import GroupName from './GroupName'
import FromTo from './FromTo'
import MessageBox from './MessageBox'
import InputBox from './InputBox';
import { myContext } from './context/Context';

const Outline = () => {

  const [from ,setFrom] = useState();
  const [to ,setTo] = useState();
  const [trip, setTrip] = useState();
  const [dp, setDp] = useState();
  console.log(dp)

  return (
    <div className='outline'>
      <GroupName name={trip}/>
      <FromTo from={from} to={to} dp={dp}/>


      <myContext.Provider value={{setFrom, setTo, setTrip, setDp}}>
     <MessageBox/>
     </myContext.Provider>
      
      <InputBox/>
    </div>
  )
}

export default Outline
