import {combineReducers, configureStore, createSlice, createStore} from "@reduxjs/toolkit";
import basketCounterSlice from "./basketCounterSlice";
import buysSlice from "./buysSlice";


const rootReducer = combineReducers({
    basketCounter: basketCounterSlice,
    buys: buysSlice,
})

export const store = configureStore({
    reducer: rootReducer
    }
)
