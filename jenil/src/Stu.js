import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stu() {


  const [data, setdata] = useState([])
  const [inputText, setInputText] = useState('')

  const textHandler = (e) => {

    setInputText(e.target.value)

  }

  const addItem = () => {
    setdata([...data, inputText])
  }

  return (
    <div>
      <center>
        <h1 >student todo list</h1>
        <input type='text' onChange={textHandler}></input>
        <button onClick={addItem}>ADD</button><br></br>

        {
          data.map((item) => {
            return (
              <>
                <div>
                  <input type='checkbox' />
                  {item}
                  <button>Edit</button>
                  <button>Delete</button>

                </div>

              </>
            )
          })
        }
      </center>
    </div>
  )
}
