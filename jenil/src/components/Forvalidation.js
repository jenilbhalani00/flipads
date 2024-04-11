import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(5, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    gender: Yup.string().required('Required'),
});


const Forvalidation = () => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        gender:''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            firstName <Field name="firstName" />
                            {errors.firstName && touched.firstName ? (
                                <div style={{ color: 'red' }}>{errors.firstName}</div>
                            ) : null}<br></br>

                            lastName<Field name="lastName" />
                            {errors.lastName && touched.lastName ? (
                                <div style={{ color: 'red' }}>{errors.lastName}</div>
                            ) : null}<br></br>

                            email<Field name="email" type="email" />
                            {errors.email && touched.email ? <div style={{ color: 'red' }}>{errors.email}</div> : null}<br></br>

                            <label>male</label>
                            <input type='radio'></input> 
                            
                            
                            <label>female</label>
                            <input type='radio'></input> <br></br>

                            
                            {errors.gender && touched.gender ? <div style={{ color: 'red' }}>{errors.gender}</div> : null}

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
export default Forvalidation