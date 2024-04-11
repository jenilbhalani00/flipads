import React, { useMemo, useState } from 'react'
import { increment } from '../slice/Cartslice'

const Usememooo = () => {

    const [data,setdata]= useState('increment')
    const [count , setCount] = useState(0)

    useMemo (()=>{
        console.log("useMemo Called")
    },[count])
    
    // console.log('oiutds')
    const countval = () => {
        setCount(count + 1);
    }
    const increment = () =>{
        setdata('jenil');
    }

  return (
    <div>
        <button onClick={countval} >{count}</button>
        <button onClick={increment}>{data}</button>
    </div>
  )
}

export default Usememooo
