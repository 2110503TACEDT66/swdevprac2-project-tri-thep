"use client"
import { useEffect, useState } from "react";
import { InterviewItem } from "../../interface"
import getCompany from "@/libs/getCompany";
import dayjs from "dayjs"
import DeleteInterview from "@/libs/deleteInterview";
import { useSession } from "next-auth/react";
import getInterviews from "@/libs/getInterviews";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";

export default function InterviewList() {
    const { data: session } = useSession();
    
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [interviewItems, setInterviewItems] = useState<InterviewItem[]>([]);

    useEffect(() => {
        if (session) {
            (async function (){
                try {
                    const data = await getInterviews((session as any).user.token);
                    setInterviewItems(data.data)
                } catch (error) {
                    console.error("Failed to fetch interviews:", error);
                }
                setLoading(false);
            })();
        }
        else {
            setLoading(false);
        }
    }, [refresh, session]);
    
    async function deleteInterview(id: string){if(session != null) {
        await DeleteInterview(id, (session.user as any).token)
        setRefresh(!refresh) 
    }}

    return (
        loading? <h2 className="text-2xl text-cyan-600 m-10 p-10  text-center"> Loading... </h2>:
           (<>
                { interviewItems.length > 0 ? interviewItems.map((item:InterviewItem)=> (
                    <div className="bg-slate-200 rounded px-5 py-2 my-2" key={item._id}>
                        <div className="text-md text-black">At: {item.company.name}</div>
                        <div className="text-md text-black">On: {dayjs(item.interviewDate).format("YYYY-MM-DD")}</div>
                        <Link className="inline rounded-md bg-teal-400 hover:bg-teal-600 px-3 py-2.5 text-white shadow-sm my-1 mr-1.5 no-underline" href={`/interview/${item._id}`}>
                            Edit
                        </Link>
                        <button className="inline rounded-md bg-red-400 hover:bg-red-600 px-3 py-2 text-white shadow-sm my-1 mr-1.5" onClick={() => deleteInterview(item._id)}>
                            Delete
                        </button>
                    </div>
                )) : <h2 className="text-2xl text-cyan-600 m-10 p-10  text-center"> No Interview Session Booking</h2>
            }
           </>
           )
    )
}