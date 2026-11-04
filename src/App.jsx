
import './App.css'
import Sign from './assets/signs.jsx'
import Number from './assets/number.jsx'
import {useState} from "react"
export default function App(){

   const[count,setCount]=useState('')
   function handleCount(key){
     if(key==="AC"){
      setCount('')
     }else if(/^[0-9.]$/.test(key)){
      setCount(prevCount=>prevCount+key)
     }
   }

  return(
    <div className='container'>
    <input id='input' value={count} readOnly/>
    <div className='numberAndSigns'>
      <Number onKeyPress={handleCount}/>
      <Sign/>
    </div>
    </div>
  )
}