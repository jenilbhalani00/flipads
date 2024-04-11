import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

const Mui = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
        },[])
    

  return (
    <>
    <div>
        <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

    </div> 

    <div>
        {  loading ? <Skeleton variant="rounded" width={220} height={170} /> :
            <img src={require('../components/images.jpg')}></img>
        }
    </div>


    
    </> 
  )
}
export default Mui
