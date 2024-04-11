import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Sturesult = () => {
    const stuData = {
        react: '',
        opps: '',
        Mets: '',
        firstname: '',
        total: ''
    }
    const [data, setData] = useState([])
    const [formValue, setFormvalue] = useState(stuData)

    const inputFildHandler = (e) => {
        let temp = { ...formValue }
        temp[e.target.name] = e.target.value;
        setFormvalue(temp)
    } 

    // data get form student form

    const handelForm = (e) => {

        let temp = { ...formValue }
        temp['total'] = Number(temp['react']) + Number(temp['opps']) + Number(temp['Mets'])
        temp['min'] = Math.min(Number(temp['react']) , Number(temp['opps']) , Number(temp['Mets']))
        temp['max'] = Math.max(Number(temp['react']) , Number(temp['opps']) , Number(temp['Mets']))
        temp['avg'] = temp['total'] * 100 / 300
        
        if(temp['total'] < 100)
        {
            temp['result'] = 'fail'
        }
        else
        {
            temp['result'] = 'pass'
        }
        setData([...data, temp])
        setFormvalue(stuData)

    }
    return (
        <div className='m-5'  >
            <label>Name:</label>
            <input type='text' value={formValue.firstname} onChange={inputFildHandler} placeholder='Enter your name' name='firstname'></input> <br></br><br></br>
            <label>Mets:</label>
            <input type='text' value={formValue.Mets} onChange={inputFildHandler} placeholder='Enter your name' name='Mets'></input> <br></br><br></br>
            <label>opps:</label>
            <input type='text' value={formValue.opps} onChange={inputFildHandler} placeholder='Enter your name' name='opps'></input> <br></br><br></br>
            <label>react:</label>
            <input type='text' value={formValue.react} onChange={inputFildHandler} placeholder='Enter your name' name='react'></input> <br></br><br></br>

            <button onClick={handelForm} className='btn btn-primary'>submit</button>
            {/* record display */}

            <center className='my-5'>
                <Table striped bordered hover>
                    <thead className='w-75'>
                        <tr>
                            <th>no</th>
                            <th>First Name</th>
                            <th>Mets</th>
                            <th>opps</th>
                            <th>react</th>
                            <th>total</th>
                            <th>min</th>
                            <th>max</th>
                            <th>avg</th>
                            <th>result</th>
                            <th>Action</th>

                            {/* fail red /blue line */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr className='rowhighlight'>

                                        <td>{index + 1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.Mets}</td>
                                        <td>{item.opps}</td>
                                        <td>{item.react}</td>
                                        <td>{item.total}</td>
                                        <td>{item.min}</td>
                                        <td>{item.max}</td>
                                        <td>{item.avg}</td>
                                        <td>{item.result}</td>
                                        <td>
                                            <button className='btn btn-warning mx-2'>Edit</button>
                                            <button className='btn btn-danger mx-2'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }


                    </tbody>
                </Table>
            </center>


        </div>
    )
}

export default Sturesult;