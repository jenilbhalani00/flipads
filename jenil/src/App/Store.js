import { configureStore } from '@reduxjs/toolkit'
import Cartslice from '../slice/Cartslice'

export default configureStore({
  reducer: {
    addtocart : Cartslice
  },
})