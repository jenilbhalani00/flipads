import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Todo = () => {

  // data state
  const [data, setData] = useState([])
  // input text
  const [text, setText] = useState('')
  // save id from manage a input add btn
  const [editId, setEditId] = useState(null)


  // add new item
  const InputHandel = () => {

    if (text.trim() != "") 
    {
      if (editId != null) 
      {
        // update item
        let temp = [...data]
        temp[editId] = text
        setData(temp)
        setEditId(null)
        setText('')
      } 
      else 
      {
        // add new item
        setData([...data, text])
        setText('')
      }
    }
  }
    // update todo
    const updateTodo = (updateId) => {
    // console.log('updateid',upda)
    setEditId(updateId)
    // name diaplay at input filed
    let temp = [...data]
    setText(temp[updateId])
  }
  // remove from item in todo
  const removeHandel = (postionTodelete) => {

    const filterData = data.filter((item, index) => {
      return postionTodelete != index
    })
    setData(filterData)

  }
  return (
    <div>
      {/* title */}
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Car Collaction</h1>
      {/* input box */}
      <div className='d-flex justify-content-center my-5'>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Writre a new car "></input>
        <button className='btn btn-primary' onClick={InputHandel}>Add new Collaction</button>
      </div>
      <div>
        <center>
          <Table striped bordered hover className='w-75'>
            <thead>
              <tr>
                <th>#</th>
                <th>Chek</th>
                <th>Car Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><input type='checkbox'></input></td>
                      <td>{item}</td>
                      <td>
                        {/* can edit and delete */}
                        <button className='btn btn-success mx-2' onClick={() => { updateTodo(index) }}>Edit</button>
                        <button className='btn btn-danger mx-2' onClick={() => { removeHandel(index) }}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </center>

      </div>
    </div>
  )
}

export default Todo
