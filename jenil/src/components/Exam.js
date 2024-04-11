import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Exam = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          PhoneNumber: '',
          Gender:'',
          language:[],
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .min(5, 'Must be 5 characters or less')
            .max(10, 'Must be 10 characters or less')
            .required('Required'),

          lastName: Yup.string()
          .min(5, 'Must be 5 characters or less')
          .max(10, 'Must be 10 characters or less')
         .required('Required'),

         PhoneNumber: Yup.string ()
         .max(10 , 'Must be 10 characters')
         .min(10,'Must be 10 characters')
         .required('Required'),

         Gender: Yup.string ()
         .required('Required'),
         
         language: Yup.array()
         .min(2, 'Select at least two language')
         .required('Required'),
    
      
        }),
        onSubmit: (values,{resetForm}) => {
          console.log(values)
          resetForm();
        },
      });
  return (
    <center>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name : </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
         <div style={{color:'red'}}>{formik.errors.firstName}</div>
       ) : null}

        
        <br></br>
        <label htmlFor="lastName">Last Name : </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
         <div style={{color:'red'}}>{formik.errors.lastName}</div>
       ) : null}
        <br></br>
        <label htmlFor="Phone Number">Phone Number : </label>
        <input
          id="PhoneNumber"
          name="PhoneNumber"
          type="Number"
          onChange={formik.handleChange}
          value={formik.values.PhoneNumber}
        />
        {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
         <div style={{color:'red'}}>{formik.errors.PhoneNumber}</div>
       ) : null}
      <br></br>
        Gender <br></br>
         <label htmlFor="Gender">Male : </label>
         <input
          id="Gender"
          name="Gender"
          type="radio"
          onChange={formik.handleChange}
          value='Male'
        />
        <label htmlFor="Gender">Female : </label>
         <input
          id="Gender"
          name="Gender"
          type="radio"
          onChange={formik.handleChange}
          value='Female'
        />
         <label htmlFor="Gender">other : </label>
         <input
          id="Gender"
          name="Gender"
          type="radio"
          onChange={formik.handleChange}
          value='other'
        />
        {formik.touched.Gender && formik.errors.Gender ? (
         <div style={{color:'red'}}>{formik.errors.Gender}</div>
       ) : null}
        <br></br>
        language  <br></br>
        <label htmlFor="language">Eng : </label>
         <input
          id="language "
          name="language"
          type="checkbox"
          onChange={formik.handleChange}
          value='Eng'
        /><br></br>
        <label htmlFor="language">hindi : </label>
         <input
          id="language "
          name="language"
          type="checkbox"
          onChange={formik.handleChange}
          value='hindi'
        /><br></br>
        <label htmlFor="language">Guj : </label>
         <input
          id="language "
          name="language"
          type="checkbox"
          onChange={formik.handleChange}
          value='Guj'
        />
         {formik.touched.language && formik.errors.language ? (
         <div style={{color:'red'}}>{formik.errors.language}</div>
       ) : null}
       

        <br></br>
       

       
        
        <button type="submit">Submit</button>
      </form>
    </center>
  )
}

export default Exam