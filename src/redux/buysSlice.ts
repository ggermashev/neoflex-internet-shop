import {createSlice} from "@reduxjs/toolkit";

const buysSlice = createSlice({
    name: "buys",
    initialState: {
        items: JSON.parse(localStorage.getItem('buys') as string) || []
    },
    reducers: {
        add(state, action) {
            state.items = [...state.items, action.payload]
            localStorage.setItem('buys', JSON.stringify(state.items))
        },
        remove(state, action) {
            state.items = state.items.filter((i: {id: number}) => {return (i.id !== action.payload)})
            localStorage.setItem('buys', JSON.stringify(state.items))
        },
        getMore(state, action) {
            state.items.find((i: {id: number}) => i.id == action.payload).count += 1
            localStorage.setItem('buys', JSON.stringify(state.items))
        },
        getLess(state, action) {
            const item = state.items.find((i: {id: number}) => i.id == action.payload)
            if (item.count !== 0) {
                item.count -= 1
            }
            localStorage.setItem('buys', JSON.stringify(state.items))
        },
    }
})

export default buysSlice.reducer
export const {add, remove, getMore, getLess} = buysSlice.actions