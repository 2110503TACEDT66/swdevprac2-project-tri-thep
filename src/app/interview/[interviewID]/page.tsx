"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import getInterview from "@/libs/getInterview";
import { InterviewItem } from "../../../../interface";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import updateInterview from "@/libs/updateInterview";


export default function InterviewEditPage({params} : {params: {interviewID : string}}) {
    const [loading, setLoading] = useState(true);
    const [interviewItem, setInterviewItem] = useState<InterviewItem>();
    const { data: session } = useSession();

    const [interviewDate, setInterviewDate] = useState<Dayjs | null>(null);

    useEffect(() => {
        if (session) {
            (async function () {
                try {
                    const data = await getInterview((session as any).user.token, params.interviewID);
                    setInterviewItem(data.data);
                } catch (error) {
                    console.error("Failed to fetch interview:", error);
                }
                setLoading(false);
            })();
        }
        else {
            setLoading(false);
        }
    }, [session]);

    async function update () {
        setLoading(true)
        if (session && interviewDate !== null) {
            try{
                await updateInterview(
                    interviewDate.toISOString(),
                    params.interviewID,
                    (session.user as any).token,
                )
                alert("Success.")
            }catch{
                alert("Failed.")
            }
        }
        setLoading(false)
    }

    return (
        loading ? <h2 className="text-2xl text-cyan-600 m-10 p-10  text-center"> Loading... </h2>:
        <div className="w-[100%] flex flex-col items-center space-y-4" style={{ backgroundImage: "url('/img/apptcover.jpg')" }}>
            <h1 className="text-xl">Interview At: {interviewItem?.company.name}</h1>
            {interviewItem && (
                <DateReserve initialDate={dayjs(interviewItem.interviewDate)} onDateChanged={setInterviewDate}/>
            )}
            <button onClick={update} className="block rounded-md bg-emerald-500 hover:bg-emerald-400 px-3 py-2 
           text-white shadow-sm" name="Book Company">
                Update
            </button>
        </div>

    );
}
