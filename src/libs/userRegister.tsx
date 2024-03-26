export default async function userRegister(name: string, email: string, password: string, tel: string) {    
    const response = await fetch("https://online-job-fair-backend.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            tel: tel,
            password: password,
            role: "user"
        }),
    })

    if (!response.ok) {
        console.log(response.body)
        throw new Error("Failed to fetch user")
    }

    return await response.json()
}