import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
  
import axios from 'axios'
import { Container, Navbar } from 'react-bootstrap'

const Productdetail = () => {

  let { id } = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  },[id])

  return (  
    <>

            <section >
                <div>
                    <Navbar className="bg-primary-subtle">
                        <Container>
                            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <button className='p-1 rounded'>Mark Otto</button>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </section>
           <main className='row w-100' >
                <div className='w-50 d-flex'>
                    <div className='d-flex flex-column'>
                        {data?.images?.map((item) => {
                            return  <img  style={{objectFit:'cover',border:'1px solid black', borderRadius:'10px'}} src={item} width="100px" height="100px" className='m-2 object-fit-cover '></img>
                        })}
                    </div>
                    <div className='ms-3 pt-3'>
                        <div>
                            <img style={{height:'550px',width:'100%',objectFit:'cover',border:'1px solid black', borderRadius:'10px'}} src={data?.thumbnail}></img>
                        </div>
                    </div>
                </div>
                <div className='w-50 text-center mt-5 p-2'>
                    <h1>{data?.title}</h1>  
                    <h4>description : {data?.description}</h4>
                    <h3>price : {data?.price}$</h3>
                    <h5>discountPercentage : {data?.discountPercentage}</h5>
                    <h6>rating : {data?.rating}</h6>
                    <h6>stock : {data?.stock}</h6>
                    <h6>brand: {data?.brand}</h6> <br></br>
                    <button className='ms-2 rounded p-1'>Add to cart</button>
                    <button className='ms-3 rounded p-1'>REMOVE</button>
                </div>
            </main>
        </>
  )
}

export default Productdetail
