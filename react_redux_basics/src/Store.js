import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './features/counter/Counterslice'



// export default configureStore({
//   reducer: {}
// })

export const store = configureStore({
    reducer:{
        counter: counterSlice,
    },
})