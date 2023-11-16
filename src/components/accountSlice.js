import {deposit, getBalance, getTransactions} from '../api/depositAccountApiCacheMock';

import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        balance: getBalance(),
        transactions: getTransactions()
    },
    reducers: {
        doDeposit: (state, action) => {
            deposit(action.payload.paymentAccount, action.payload.depositAmount)
            return {...state, balance: getBalance(), transactions: getTransactions()}
        }
    }
})

export const { doDeposit } = accountSlice.actions

export const selectBalance = (state) => state.account.balance
export const selectTransactions = state => state.account.transactions

export default accountSlice.reducer
