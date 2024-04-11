import { useFormik } from 'formik'
import React from 'react'

const Formikhook = () => {

    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        onSubmit:values => {
            console.log(values)
        },
    })

  return (
    
        <form onSubmit={formik.handleSubmit}>
            <label>name</label>
            <input
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.name}
            ></input>
            <label>name</label>
            <input
                id='email'
                name='email'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.email}
            ></input>
            <label>name</label>
            <input
                id='password'
                name='password'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.password}
            ></input>
            <button type='submit'>submit</button>
        </form>

  )
}

export default Formikhook