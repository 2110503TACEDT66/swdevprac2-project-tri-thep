
import CardPanel from "@/components/CardPanel";
import CompanyCatalog from "@/components/CompanyCatalog";
import getCompanies from "@/libs/getCompanies";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Company() {

    const companies = await getCompanies()
    
    return(
        <main className="text-center p-10 m-10">
        <h1 className="text-xl font-medium text-black font-sans">Select Your Company</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CompanyCatalog companiesJson={companies}/>
        </Suspense>
    </main>
    );

}