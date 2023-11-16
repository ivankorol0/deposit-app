import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../components/accountSlice'

export const store = configureStore({
    reducer: {
        account: accountReducer
    },
});

console.log(store.getState());