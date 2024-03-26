export default async function CreateInterview(date:string, companyID: string, userToken: string) {
    const response = await fetch(`https://online-job-fair-backend.vercel.app/api/v1/companies/${companyID}/interviews/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify({
            interviewDate: date,
        }),
    })

    if(!response.ok) {
        console.log(response.json())
        throw new Error("Cannot create interview.")
    }
    
    return await response.json()
}