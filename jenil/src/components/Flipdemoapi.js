import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams } from 'react-router-dom';
import { displayCart } from '../slice/Cartslice'
import { useDispatch } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

const Flipdemoapi = () => {
    const [data, setData] = useState(null)
    const [category, setcategory] = useState(null)
    const dispatch = useDispatch()
    const { title } = useParams()

    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
        },[])


    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(function (response) {

                console.log(response);
                setcategory(response.data)
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {

            });
    }, [])

    useEffect(() => {
        if (title?.length >= 1) {
            axios.get('https://dummyjson.com/products/category/' + title)
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
        }
        else
        {
            axios.get('https://dummyjson.com/products')
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
        }
    }, [title])

// console.log('data',data)
    return (
        <>
            <section >
                <div>
                    <Navbar className="bg-primary-subtle">
                        <Container>
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to='/cart'>cart</Link>
                        </Container>
                    </Navbar>
                </div>
            </section>

            <section className='pt-2'>
                <Container>

                    <div className='d-flex'>
                        <div className='col-3  scroll1'>
                            {
                                category != null && category ?.map((item) => {
                                    return (
                                        <>
                                            <div className=' scroll p-2'>
                                                <Link className='nav-link' to={`/${item}`}><h5>{item}</h5></Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='col-9 ms-4 right-scroll'>
                            <div className='d-flex flex-wrap '>
                                {
                                   data != null && data.products.map((item) => {
                                        return (
                                            <>
                                                <div className='col-4 p-3'>
                                                    <Link to={`/productdetail/${item.id}`}>
                                                        {
                                                            loading ? <Skeleton variant="rounded" width={300} height={200} /> :
                                                            <img src={item.thumbnail} width='300px' height='200px'></img>
                                                        }
                                                        
                                                    </Link>
                                                    <div className='pt-2'>
                                                        
                                                        <h5>{item.title}</h5>
                                                        <h5>{item.price}</h5>
                                                        <button onClick={()=> dispatch(displayCart(item))} className='rounded p-1'>Add to cart</button>
                                                        <button className='ms-2 rounded p-1'>Remove</button>
                                                        
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </Container>
            </section>


        </>
    )
}

export default Flipdemoapi;