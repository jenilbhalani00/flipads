import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/Cartslice'

const Cart = () => {

    const cartData = useSelector((state) => state.addtocart)
    const dispath = useDispatch()


    const additem = (index) => {
      dispath(increment(index))
    }
    const removeitem = (index) => {
      dispath(decrement(index))
    }

  return (
    <div>
    <div>
      <table className='w-100'>
        <thead>
          <tr>
            <th width='50px'>NO</th>
            <th width='400px'>ITEM IMAGE</th>
            <th width='550px'>DESCRIPTION</th>
            <th width='200px'>QUINTITY</th>
            <th width='100px'>PRICE</th>
            <th width='auto'>TOTAL AMOUNT</th>
          </tr>
          {
            cartData?.cartItem.map((item,index) => {
              return (
               <tr>
                <td>{index + 1}</td>
                <td className='p-2'><img src={item.thumbnail} height='200px' width='350px'></img></td>
                <td>{item.brand} - {item.description}</td>
                <td>
                  <button className='btn btn-primary' onClick={()=>{additem(index)}} >ADD</button>
                  {item.qty}
                  <button className='btn btn-success' onClick={()=>{removeitem(index)}} >REMOVE</button>
                </td>
                <td>{item.price}</td>
                <td>{item.total}</td>
               </tr>
              )
            })
          }
        </thead>
      </table>
          <h1>GRAND TOTAL {cartData.grandtotal}</h1>
    </div>
  </div>
  )
}

export default Cart
