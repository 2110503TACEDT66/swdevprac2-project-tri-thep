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
    const { data: session } = useSession();

    const [interviewDate, setInterviewDate] = useState<Dayjs | null>(null)
    const [company, setCompany] = useState('')

    const makeBooking = async () => {
        if (session && interviewDate !== null && company !== "") {
            await createInterview(
                interviewDate.toISOString(),
                company,
                (session.user as any).token,
            );
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Company Booking </div>

            <div className="w-fit space-y-2">
                <CompanyDateReserve onCompanyChanged={setCompany} onDateChanged={setInterviewDate} />
            </div>
            <button onClick={makeBooking} className="block rounded-md bg-emerald-500 hover:bg-emerald-400 px-3 py-2 
           text-white shadow-sm" name="Book Company">
                Book Company
            </button>
        </main>
    );
}