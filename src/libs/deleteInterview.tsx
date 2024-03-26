export default async function DeleteInterview(interviewID: string, userToken: string) {
    const response = await fetch(`https://online-job-fair-backend.vercel.app/api/v1/interviews/${interviewID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`
        },
    })

    if(!response.ok) {
        throw new Error("Cannot delete an interview.")
    }
    
    return await response.json()
}