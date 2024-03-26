'use client'

import { DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem} from "@mui/material"
import { useEffect, useState } from "react"
import getCompanies from "@/libs/getCompanies"
import { CompanyItem, InterviewItem } from "../../interface"
import dayjs from "dayjs"

export default function DateReserve({
    initialDate,
    onDateChanged,
}: {
    initialDate: any,
    onDateChanged: Function,
}) {
    return(
        <div className="block bg-slate-100 round-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" minDate={dayjs()} value={initialDate} onChange={(value: any)=>{onDateChanged(dayjs(value))}}/>
            </LocalizationProvider>
        </div>
    );
}