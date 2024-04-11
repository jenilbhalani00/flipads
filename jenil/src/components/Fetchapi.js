import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
    const [data,setData]=useState(null)

    useEffect(()=>{

        async function data()
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const bhalani= await response.json();
            setData(bhalani)
        }
        data()
       
    },[])

  return (
    <>
      
      {
       data != null && data?.map((item)=>{
            return (
              <>
                <div>{item.title}</div>
                <h2>{item.id}</h2>
              </>
            ) 
        })
      }
    </>
  )
}

export default Fetchapi;
