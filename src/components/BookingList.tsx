
"use client"
import {useAppSelector, AppDispatch} from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList() {
    const bookItems = useAppSelector((state)=> state.reduxPesistedReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
           { bookItems.length > 0 ? bookItems.map((reservationItem)=> (
                
                <div className="bg-slate-200 rounded px-5 py-2 my-2" key={reservationItem.id}>
                    <div className="text-sm">Name: {reservationItem.name}</div>
                    <div className="text-sm">Surname: {reservationItem.surname}</div>
                    <div className="text-sm">ID: {reservationItem.id}</div>
                    <div className="text-md">At: {reservationItem.hospital}</div>
                    <div className="text-md">On: {reservationItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                        text-white shadow-sm" onClick={()=> dispatch(removeBooking(reservationItem.id))}>
                        Remove from BookingList
                    </button>
                </div>
            )) : <h2 className="text-2xl text-cyan-600 m-10 p-10  text-center"> No Vaccine Booking</h2>
           }
        </>
    )
}