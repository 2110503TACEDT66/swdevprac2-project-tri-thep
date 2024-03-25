"use client"

import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { useState } from "react";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { addBooking } from "@/redux/features/bookSlice";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default  function Booking () {


    const [pickupDate, setPickDate] = useState<Dayjs|null>(null)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [id, setID] = useState('')
    const [surname, setSurname] = useState('')

   const dispatch = useDispatch<AppDispatch>()

    function makeBooking()   {
        
        if (id && location && surname && name && pickupDate ) {
            const item:BookingItem = {
                name: name,
                surname: surname,
                id: id,
                company: location,
                bookDate: dayjs(pickupDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }


    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
             <div className="text-xl font-medium">New Company Booking </div>
             
            <div className="w-fit space-y-2">
                <div className="pb-8">
                <TextField  label="Name" variant="standard" name="Name" value={name} onChange={(e) =>{setName(e.target.value)}}/>
                </div>
                <div className="pb-8">
                <TextField  label="Surname" variant="standard" name="Surname" value={surname} onChange={(e) =>{setSurname(e.target.value)}}/>
                </div>
                <div className="pb-8">
                <TextField  label="Citizen ID" variant="standard" name="Citizen ID" value={id} onChange={(e) =>{setID(e.target.value)}}/>
                </div>
               
                <div className="bg-slate-100 round-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white" value={pickupDate} onChange={(value)=>{setPickDate(value)}}/>
                    </LocalizationProvider>
                    <div className="p-5 m-5">
                    <Select variant="standard" name="Hospital" id="hospital" value={location} onChange={(e) =>{setLocation(e.target.value)}}
                    className="h-[2em] w-[200px]">
                    <MenuItem value="IBM">IBM</MenuItem>
                    <MenuItem value="Microsoft">Microsoft</MenuItem>
                    <MenuItem value="JP">JP</MenuItem>
                    </Select>
                    </div>
                    {/* <DateReserve/> */}
                </div>
              
                
            </div>
           <button  onClick={makeBooking} className="block rounded-md bg-emerald-500 hover:bg-emerald-400 px-3 py-2 
           text-white shadow-sm" name="Book Company">
             Book Company
           </button>

           

        </main>
    );
}