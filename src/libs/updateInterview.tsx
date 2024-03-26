export default async function DeleteInterview(date:string, interviewID: string, userToken: string) {
    const response = await fetch(`https://online-job-fair-backend.vercel.app/api/v1/interviews/${interviewID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify({
            interviewDate: date,
        }),
    })

    if(!response.ok) {
        throw new Error("Cannot update an interview.")
    }
    
    return await response.json()
}