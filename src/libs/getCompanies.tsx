export default async function getCompanies() {
    await new Promise((reslove)=>setTimeout(reslove, 1000))

    const response = await fetch("https://online-job-fair-backend.vercel.app/api/v1/companies")

    if (!response.ok) {
        throw new Error("Failed to fetch companies")
    }

    return await response.json()
}
