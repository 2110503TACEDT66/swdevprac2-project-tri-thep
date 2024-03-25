
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";




type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: []}

export const bookSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=> {
            const existedBook = state.bookItems.findIndex(item => item.id === action.payload.id)

            if (existedBook !== -1) {
                state.bookItems[existedBook] = action.payload;
            } else {
                state.bookItems.push(action.payload)
            }
           
            
        },
        removeBooking: (state, action:PayloadAction<string>)=> {
            const remainItems = state.bookItems.filter(obj => {
                return (obj.id !== action.payload)
            })
            state.bookItems = remainItems
           
        }


    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer
