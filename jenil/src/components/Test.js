import React, { useState } from 'react'

export default function Test() {

    const [data,setdata] = useState([])

  return (
    <div>
      <input type='number' id='a1'></input> <br></br>
      <input type='number' id='a2'></input> <br></br>
      <button onClick={sub}>submit</button>
      <h1 id='ans'>ans=</h1>
    </div>
  )
  function sub() {

    let v1 = document.getElementById('a1').value;
    let v2 = document.getElementById('a2').value;

    let sum = v2-v1
    // alert(sum);
    let minit = sum*60
    // alert( minit)
    let ans = minit/10
    document.getElementById('ans').innerHTML='ans =' + ans 

}
}
