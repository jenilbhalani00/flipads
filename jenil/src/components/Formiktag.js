import React from 'react';
import { Field, Formik } from 'formik';

const Formiktag = () => {
    return (
        <>

            <Formik
                initialValues={{ name: '', email: '', password: '', gender: '',city:'' }}
                onSubmit={(values, { resetForm }, actions) => {
                    console.log(values)
                    resetForm();
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <label>name</label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        /> <br></br>
                        <label>email</label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                        /><br></br>
                        <label>password</label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                        /><br></br>
                        <label>male</label>
                        <input
                            type="radio"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={"male"}
                            name="gender"
                        /><br></br>
                        <label>female</label>
                        <input
                            type="radio"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={'female'}
                            name="gender"
                        /><br></br>
                        
                        {/* <Field as="select" name="city">
                            <option value="red">surat</option>
                            <option value="green">vapi</option>
                            <option value="blue">tapi</option>
                        </Field> */}

                        {/* orrr */}

                        <select name="city"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur} >
                            
                            <option >select</option>
                            <option value='surat'>surat</option>
                            <option value='tapi'>tapi</option>
                        </select>
                        <br></br>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>

        </>
    )
}
export default Formiktag;