import React, { useEffect, useState } from 'react'

export const Tictoc = () => {
  
 const [data,setData] =useState(["","","","","","","","",""])
 const [signManage,setSignManage] = useState(true)
 const [winmessage,setWinmessage] = useState('')
 const [winplayer,setWinplayer] = useState('')


 const inputHandel = (postion)=>{
  
    let temp = [...data]
   
    if( temp[postion] == ""){
        if(winplayer != 'true'){
            temp[postion] = signManage ? 'x' :'o';
            setData(temp)
            setSignManage(!signManage)
        }
    }
  
    // function win
    win(temp)
 }

 const win = (temp)=>{

    if(temp[0] == 'x' && temp[1] == 'x' && temp[2] == 'x'){
        setWinmessage('x is win')
        setWinplayer('true')
    }
    
 }

  return (
    <div className='my-5'>
        <h1 className='text-center my-3'>Tic-Toy</h1>

        <div className='d-flex flex-wrap ' style={{width:'300px',margin:'auto'}}>
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[0]} onClick={()=>inputHandel(0)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[1]} onClick={()=>inputHandel(1)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[2]} onClick={()=>inputHandel(2)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[3]} onClick={()=>inputHandel(3)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[4]} onClick={()=>inputHandel(4)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[5]} onClick={()=>inputHandel(5)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[6]} onClick={()=>inputHandel(6)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[7]} onClick={()=>inputHandel(7)} />
          <input type="text" style={{width:'100px',height:'100px',textAlign:'center'}} value={data[8]} onClick={()=>inputHandel(8)} />
        </div>
       {
        winmessage &&
        <div className='text-center  my-5'>
        <h1> 😀 hurrey! {winmessage}</h1> 
        </div>
       } 
      {/* reset btn ,win plyer */}
    </div>
  )
}
