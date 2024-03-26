'use client'

import { DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem} from "@mui/material"
import { useEffect, useState } from "react"
import getCompanies from "@/libs/getCompanies"
import { CompanyItem, InterviewItem } from "../../interface"
import dayjs from "dayjs"

export default function CompanyDateReserve({
    onDateChanged,
    onCompanyChanged,
}: {
    onDateChanged: Function,
    onCompanyChanged: Function,
}) {
    const [companies, setCompanies] = useState<CompanyItem[]>([]);

    useEffect(() => {
        (async function () {
            try {
              const data = await getCompanies();
              setCompanies(data.data);
            } catch (error) {
              console.error("Failed to fetch companies:", error);
            }
        })();
      }, []);
    

    return(
        <div className="bg-slate-100 round-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" minDate={dayjs()} onChange={(value: any)=>{onDateChanged(dayjs(value))}}/>
            </LocalizationProvider>
            <Select variant="standard" name="location" id="company" className="h-[2em] w-[200px]" onChange={(e)=>{onCompanyChanged(e.target.value)}}>
                {companies.map((company: CompanyItem) => (
                <MenuItem key={company.id} value={company.id}>
                    {company.name}
                </MenuItem>))}
            </Select>
        </div>
    );
}