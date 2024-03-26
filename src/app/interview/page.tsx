"use client"

import { TextField } from "@mui/material";
import { InterviewItem } from "../../../interface";
import { useState } from "react";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CompanyDateReserve from "@/components/CompanyDateReserve";
import { useSession } from "next-auth/react";
import createInterview from "@/libs/createInterview";


export default function Interview() {
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();

    const [interviewDate, setInterviewDate] = useState<Dayjs | null>(null)
    const [company, setCompany] = useState('')

    async function makeBooking () {
        setLoading(true)
        if (session && interviewDate !== null && company !== "") {
            try{
                await createInterview(
                    interviewDate.toISOString(),
                    company,
                    (session.user as any).token,
                );
                alert("Success. ")
            }catch(err){
                alert("Failed. Cannot create more than three bookings.")
            }
        }
        setLoading(false)
    }

    return (
        loading ? <h2 className="text-2xl text-cyan-600 m-10 p-10  text-center"> Loading... </h2>:
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Interview Booking </div>

            <div className="w-fit space-y-2">
                <CompanyDateReserve onCompanyChanged={setCompany} onDateChanged={setInterviewDate} />
            </div>
            <button onClick={makeBooking} className="block rounded-md bg-emerald-500 hover:bg-emerald-400 px-3 py-2 
           text-white shadow-sm" name="Book An Interview">
                Book An Interview
            </button>
        </main>
    );
}