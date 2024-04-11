import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:[],
    grandtotal:0
}

export const counterSlice = createSlice({
  initialState,
  name: 'addtocart',
  reducers: {
    displayCart: (state , action) => {


        action.payload.qty=1
        action.payload.total=action.payload.price
        action.payload.grandtotal=0

        state.cartItem.push(action.payload);

        let alltotal = 0 

        state?. cartItem ?.map((item)=>{
          alltotal  += Number(item.total)
        })

        state.grandtotal = alltotal
      
    },

    increment : (state, action )=>{
      let temp = state.cartItem
      if(temp[action.payload].qty < 10 )
      {
        temp[action.payload].qty += 1
        temp[action.payload].total = temp[action.payload].qty * temp[action.payload].price

        let alltotal = 0 

        state?. cartItem ?.map((item)=>{
          alltotal  += Number(item.total)
        })

        state.grandtotal = alltotal
        
        state.cartItem = temp
      } 

  },
    decrement : (state, action )=>{

    let temp = state.cartItem

    if(temp[action.payload].qty > 1){
      temp[action.payload].qty -= 1;
      // temp[action.payload].total = temp[action.payload].qty * temp[action.payload].price
      temp[action.payload].total = temp[action.payload].total - temp[action.payload].price
      
      let alltotal = 0 

        state?. cartItem ?.map((item)=>{
          alltotal  += Number(item.total)
        })

        state.grandtotal = alltotal
  
    }
    else{
      
      state.grandtotal -=  state.cartItem[action.payload].total 
      temp.splice(action.payload , 1)
     
      }
    
    state.cartItem = temp
},
  
}
})

export const { displayCart, increment , decrement} = counterSlice.actions

export default counterSlice.reducer