import {createSlice} from "@reduxjs/toolkit";

const buysSlice = createSlice({
    name: "buys",
    initialState: {
        items: JSON.parse(localStorage.getItem('buys') as string)
    },
    reducers: {
        add(state, action) {
            state.items = [...state.items, action.payload]
        },
        remove(state, action) {
            state.items.filter((i: {id: number}) => {return i.id !== action.payload})
        }
    }
})

export default buysSlice.reducer
export const {add, remove} = buysSlice.actions