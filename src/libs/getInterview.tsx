export default async function getInterview(token: string, interviewID: string) {
    const response = await fetch(`https://online-job-fair-backend.vercel.app/api/v1/interviews/${interviewID}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch an interview.")
    }

    return await response.json()
}
