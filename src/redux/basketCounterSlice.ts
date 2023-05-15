import {createSlice} from "@reduxjs/toolkit";

const basketCounterSlice = createSlice({
    name: "basketCounter",
    initialState: {
        count: JSON.parse(localStorage.getItem('buys') as string)?.length || 0
    },
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        }
    }
})

export default basketCounterSlice.reducer
export const {increment, decrement} = basketCounterSlice.actions